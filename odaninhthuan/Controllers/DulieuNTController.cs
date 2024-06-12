using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using odaninhthuan.Models;
using System.Web.Script.Serialization;

namespace odaninhthuan.Controllers
{
    public class DulieuNTController : Controller
    {
        //
        // GET: /DulieuNT/
        private readonly databaseninhthuan _database = new databaseninhthuan();
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult Thongtinhoga(string idhoga)
        {
            long idhg = long.Parse(idhoga);
            var contents = _database._databaseContext.iw_hoga
                .Where(c => c.id == idhg)
                .Select(c => new
                {
                    c.id,
                    c.ten,
                    c.duan_ref,
                    c.hethong_ref,
                    c.tinh_id,
                    c.huyen_id,
                    c.xa_id,
                    c.kinhdo,
                    c.vido,
                    c.diadiem,
                    c.thuockenh,
                    c.loaihoga,
                    c.chieucao,
                    c.nam_xaydung,
                    c.nam_bangiao,
                })
                .ToList();

            if (contents == null || !contents.Any())
            {
                return Json(new { success = false, message = "No data found" }, JsonRequestBehavior.AllowGet);
            }

            var dataHelper = new Datahelper();

            var results = contents.Select(c => new
            {
                c.id,
                c.ten,
                DuanName = dataHelper.GetduanName(c.duan_ref),
                HethongName = dataHelper.GethethongName(c.hethong_ref),
                c.hethong_ref,
                ProvinceName = dataHelper.GetProvinceName(c.tinh_id),
                DistrictName = dataHelper.GetDistrictName(c.huyen_id),
                CommuneName = dataHelper.GetCommuneName(c.xa_id),
                c.kinhdo,
                c.vido,
                c.diadiem,
                c.thuockenh,
                c.loaihoga,
                c.chieucao,
                c.nam_xaydung,
                c.nam_bangiao,
            }).ToList();

            return Json(new { success = true, data = results }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Thongtintinh()
        {
            var contents = _database._databaseContext.bgmap_province
                .Select(c => new
                {
                    c.gid,
                    c.ten_tinh,
                })
                .ToList();

            if (contents == null || !contents.Any())
            {
                return Json(new { success = false, message = "No data found" }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = true, data = contents }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Thongtinhuyen(int idtinh)
        {
            var contents = _database._databaseContext.bgmap_district
                .Where(c => c.tinh_id == idtinh)
                .Select(c => new
                {
                    c.gid,
                    c.ten_huyen,
                })
                .ToList();

            if (contents == null || !contents.Any())
            {
                return Json(new { success = false, message = "No data found" }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = true, data = contents }, JsonRequestBehavior.AllowGet);
        }

    }
}
