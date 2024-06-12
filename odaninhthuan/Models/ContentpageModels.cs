using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace odaninhthuan
{
    public class ContentPageModel
    {
        public IEnumerable<odaninhthuan.Models.bgmap_commune> bgninhthuancommune { get; set; }
        public IEnumerable<odaninhthuan.Models.bgmap_district> bgninhthuandistrict { get; set; }
        public IEnumerable<odaninhthuan.Models.bgmap_province> bgninhthuanprovince { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_boviaviahe> boviaviahe { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_canal> canals { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_coc> cocs { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_denchieusang> denchieusangs { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_diemngap> diemngaps { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_gieng> giengs { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_hoga> hogas { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_hotrongcay> hotrongcays { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_irrigation_sewer> irrigation_sewers { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_nhamayxulynuocthai> nhamayxulynuocthais { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_pump_station> pump_stations { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_reservoir> reservoirs { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_timduong> timduongs { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_trucuuhoa> trucuuhoas { get; set; }
        public IEnumerable<odaninhthuan.Models.iw_vuotnoi> vuotnois { get; set; }
        public IEnumerable<odaninhthuan.Models.tbl_danhmuc_duan> duanref { get; set; }
        public IEnumerable<odaninhthuan.Models.tbl_danhmuc_hethong> hethongref { get; set; }
        
        public static string BindMetaTag(string title, string keyword, string desc)
        {
            System.Text.StringBuilder strDynamicMetaTag = new System.Text.StringBuilder();
            strDynamicMetaTag.AppendFormat(@"<title>{0}</title>", title);
            strDynamicMetaTag.AppendFormat(@"<meta content='{0}' name='keywords'/>", keyword);
            strDynamicMetaTag.AppendFormat(@"<meta content='{0}' name='description'/>", desc);
            return strDynamicMetaTag.ToString();
        }
    }

}