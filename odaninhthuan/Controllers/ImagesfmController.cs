using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using odaninhthuan.Models;
using System.IO.Compression;
using System.Web.Script.Serialization;
using Newtonsoft.Json;
using System.IO;
using System.Web.Hosting;
using Syncfusion.EJ2.FileManager.Base;
using Syncfusion.EJ2.FileManager.PhysicalFileProvider;

namespace odaninhthuan.Controllers
{
    public class ImagesfmController : Controller
    {
        private readonly databaseninhthuan _database = new databaseninhthuan();
        PhysicalFileProvider operation = new PhysicalFileProvider();

        public ImagesfmController()
        {
            // Map the path of the files to be accessed with the host
            var path = HostingEnvironment.MapPath("~/Imagesfm");
            // Assign the mapped path as root folder
            operation.RootFolder(path);
        }

        [HttpPost]
        public ActionResult FileOperations(FileManagerDirectoryContent args)
        {
            switch (args.Action)
            {
                case "read":
                    // Path - Current path; ShowHiddenItems - Boolean value to show/hide hidden items
                    return Json(operation.ToCamelCase(operation.GetFiles(args.Path, args.ShowHiddenItems)));
                case "delete":
                    // Path - Current path where of the folder to be deleted; Names - Name of the files to be deleted
                    return Json(operation.ToCamelCase(operation.Delete(args.Path, args.Names)));
                case "copy":
                    //  Path - Path from where the file was copied; TargetPath - Path where the file/folder is to be copied; RenameFiles - Files with same name in the copied location that is confirmed for renaming; TargetData - Data of the copied file
                    return Json(operation.ToCamelCase(operation.Copy(args.Path, args.TargetPath, args.Names, args.RenameFiles, args.TargetData)));
                case "move":
                    // Path - Path from where the file was cut; TargetPath - Path where the file/folder is to be moved; RenameFiles - Files with same name in the moved location that is confirmed for renaming; TargetData - Data of the moved file
                    return Json(operation.ToCamelCase(operation.Move(args.Path, args.TargetPath, args.Names, args.RenameFiles, args.TargetData)));
                case "details":
                    if (args.Names == null)
                    {
                        args.Names = new string[] { };
                    }
                    // Path - Current path where details of file/folder is requested; Name - Names of the requested folders
                    return Json(operation.ToCamelCase(operation.Details(args.Path, args.Names)));
                case "create":
                    // Path - Current path where the folder is to be created; Name - Name of the new folder
                    return Json(operation.ToCamelCase(operation.Create(args.Path, args.Name)));
                case "search":
                    // Path - Current path where the search is performed; SearchString - String typed in the searchbox; CaseSensitive - Boolean value which specifies whether the search must be casesensitive
                    return Json(operation.ToCamelCase(operation.Search(args.Path, args.SearchString, args.ShowHiddenItems, args.CaseSensitive)));
                case "rename":
                    // Path - Current path of the renamed file; Name - Old file name; NewName - New file name
                    return Json(operation.ToCamelCase(operation.Rename(args.Path, args.Name, args.NewName)));
            }
            return null;
        }

        public ActionResult Upload(string path, IList<System.Web.HttpPostedFileBase> uploadFiles, string action)
        {
            FileManagerResponse uploadResponse;
            uploadResponse = operation.Upload(path, uploadFiles, action, null);

            return Content("");
        }

        public ActionResult Download(string downloadInput)
        {
            FileManagerDirectoryContent args = JsonConvert.DeserializeObject<FileManagerDirectoryContent>(downloadInput);

            string basePath = GetBasePath();
            string relativePath = args.Path?.Trim('/') ?? string.Empty;
            string fullPath = Path.Combine(basePath, relativePath);
            string extent = Path.GetExtension(args.Names[0]);
            string namedownload;
            if (!string.IsNullOrEmpty(relativePath))
            {
                string[] pathSegments = relativePath.Split(new char[] { '/', '\\' }, StringSplitOptions.RemoveEmptyEntries);
                namedownload = pathSegments[pathSegments.Length - 1];
            }
            else
            {
                namedownload = "Selected images";
            }
            // Prepare a list to collect files and directories to include in the ZIP
            List<string> filesToZip = new List<string>();
            if (args.Names.Length == 1 && extent != "")
            {
                string singleFilePath = Path.Combine(fullPath, args.Names[0]);

                if (!System.IO.File.Exists(singleFilePath))
                {
                    return HttpNotFound();
                }

                byte[] fileBytes = System.IO.File.ReadAllBytes(singleFilePath);
                string fileName = args.Names[0];

                return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
            }
            else
            {
                foreach (string fileName in args.Names)
                {
                    string filePath = Path.Combine(fullPath, fileName);

                    if (System.IO.File.Exists(filePath))
                    {
                        filesToZip.Add(filePath);
                    }
                    else if (Directory.Exists(filePath))
                    {
                        // If the requested item is a directory, add all files within it to the ZIP
                        DirectoryInfo directory = new DirectoryInfo(filePath);
                        var filesInDirectory = directory.GetFiles("*", SearchOption.AllDirectories);

                        foreach (var file in filesInDirectory)
                        {
                            filesToZip.Add(file.FullName);
                        }
                    }
                    else
                    {
                        // Optionally, handle missing files or directories
                        // For now, let's assume the file/directory doesn't exist
                        return HttpNotFound();
                    }
                }
                using (MemoryStream zipStream = new MemoryStream())
                {
                    using (ZipArchive zip = new ZipArchive(zipStream, ZipArchiveMode.Create, true))
                    {
                        foreach (string fileToZip in filesToZip)
                        {
                            // Determine the entry name in the ZIP archive
                            string entryName = relativePath + "/" + Path.GetFileName(fileToZip);
                            zip.CreateEntryFromFile(fileToZip, entryName);
                        }
                    }

                    zipStream.Position = 0;
                    return File(zipStream.ToArray(), "application/zip", namedownload + ".zip");
                }
            }

        }

        private string GetBasePath()
        {
            // Get the base path and create the directory if it doesn't exist
            var path = Server.MapPath("~/Imagesfm");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            return path;
        }
        public ActionResult GetImage(FileManagerDirectoryContent args)
        {
            return operation.GetImage(args.Path, args.Id, false, null, null);
        }
        public ActionResult Index()
        {
            return View();
        }

    }
}
public class ImagesManagerItem
{
    public string Name { get; set; }
    public string Type { get; set; } 
    public long Size { get; set; }
    public DateTime DateCreated { get; set; }
    public DateTime DateModified { get; set; }
    public bool HasChild { get; set; }
}