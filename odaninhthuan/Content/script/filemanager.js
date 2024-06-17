var FnFilemanager = {
    Loaddulieu: function (data) {
        var fileManager = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: 'Filemanager/FileOperations',
                uploadUrl: 'Filemanager/Upload',
                downloadUrl: 'Filemanager/Download',
                getImageUrl: 'Filemanager/GetImage',
            },
            view: 'LargeIcons',
            allowMultiSelection: true,
            showThumbnail: true
        });
        fileManager.appendTo('#filemanager');
    },
    Loaddataanh: function (data) {
        var fileManager = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: 'Imagesfm/FileOperations',
                uploadUrl: 'Imagesfm/Upload',
                downloadUrl: 'Imagesfm/Download',
                getImageUrl: 'Imagesfm/GetImage',
            },
            toolbarSettings: {
                items: ['Upload', 'Refresh', 'Download', 'View', 'Details', 'Delete']
            },
            uploadSettings: {
                autoUpload: true,
                minFileSize: 1,
                maxFileSize: 1048576,
                allowedExtensions: '.jpg,.jpeg,.png,.gif,.bmp,.tiff'
            },
            contextMenuSettings: {
                file: ['Open', 'Download', 'Delete', 'Rename', 'Details'],
                folder: ['Open', 'Upload', 'Delete', 'Rename', 'Details']
            },
            fileOpen: function (args) {
                if (args.fileDetails.isFile) {
                    // Implement your custom file open logic here if needed
                }
            },
            beforeSend: function (args) {
                // Disable the "New Folder" button in the toolbar
                if (args.action === 'toolbar' && args.module === 'toolbar') {
                    var newFolderBtn = document.querySelector('.e-fe-newfolder');
                    if (newFolderBtn) {
                        newFolderBtn.style.display = 'none';
                    }
                }
            },
            fileSelect: function (args) {
                // Implement your custom file select logic here if needed
            }
        });

        // Render initialized File Manager
        fileManager.appendTo('#Imagesmanager');
    }

}