//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace odaninhthuan.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbl_tutailieu_thuoctinh_danhmuc
    {
        public long ttdm_id { get; set; }
        public string ttdm_name { get; set; }
        public Nullable<long> ttdm_tt_id { get; set; }
        public string ttdm_kyhieu { get; set; }
        public Nullable<int> ttdm_orderby { get; set; }
        public Nullable<System.DateTime> created_at { get; set; }
        public string created_by { get; set; }
        public Nullable<System.DateTime> last_modified_at { get; set; }
        public string last_modified_by { get; set; }
        public Nullable<int> deleted_status { get; set; }
    }
}
