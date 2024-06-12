using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace odaninhthuan.Models
{
    public class Datahelper
    {
        private readonly databaseninhthuan _database = new databaseninhthuan();

        public string GetProvinceName(int? provinceId)
        {
            var province = _database._databaseContext.bgmap_province.SingleOrDefault(p => p.gid == provinceId);
            return province != null ? province.ten_tinh : "NaN";
        }

        public string GetDistrictName(int? districtId)
        {
            var district = _database._databaseContext.bgmap_district.SingleOrDefault(d => d.gid == districtId);
            return district != null ? district.ten_huyen : "NaN";
        }

        public string GetCommuneName(int? communeId)
        {
            var commune = _database._databaseContext.bgmap_commune.SingleOrDefault(c => c.gid == communeId);
            return commune != null ? commune.ten_xa : "NaN";
        }
        public string GethethongName(Guid? mahethong)
        {
            var hethong = _database._databaseContext.tbl_danhmuc_hethong.SingleOrDefault(c => c.mahieu == mahethong);
            return hethong != null ? hethong.ten : "NaN";
        }
        public string GetduanName(Guid? maduan)
        {
            var duan = _database._databaseContext.tbl_danhmuc_duan.SingleOrDefault(c => c.mahieu == maduan);
            return duan != null ? duan.ten : "NaN";
        }
    }
}