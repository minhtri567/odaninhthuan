using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using odaninhthuan.Models;
using System.Web.Script.Serialization;

namespace odaninhthuan.Controllers
{
    public class HomeController : Controller
    {
        private readonly databaseninhthuan _database = new databaseninhthuan();

        public ActionResult Index()
        {
            var contents = _database._databaseContext.iw_diemngap.ToList();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "";

            return View();
        }
        public JsonResult Gettoado(string PostData)
        {
            var result = 0;

            return Json(result);
        }
    }
}
