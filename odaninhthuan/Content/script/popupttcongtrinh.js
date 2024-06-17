
// ho ga tan tai
var popupttct = {
    thongtinhoga: function (data) {
        return '<form class="form-ttct">' +
                  '<fieldset disabled="">' +
                    '<h3 class="line-behind"><span>Thông tin chung</span></h3>'+
                    '<div class="formline">' +
                      '<label class="form-label">Tên</label>'+
                      '<input type="text" id="tenttct" class="form-control" value="' + data.ten+ '" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Hệ thống</label>' +
                      '<input type="text" id="hethongttct" class="form-control" value="' + data.HethongName + '" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Hạng mục</label>' +
                      '<input type="text" id="hangmucttct" class="form-control" value="' + data.DuanName + '" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Tỉnh</label>' +
                      '<input type="text" id="tinhttct" class="form-control" value="' + data.ProvinceName + '" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Huyện</label>' +
                      '<input type="text" id="huyenttct" class="form-control" value="' + data.DistrictName + '" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Xã</label>' +
                      '<input type="text" id="xattct" class="form-control" value="' + data.CommuneName + '" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Kinh độ</label>' +
                      '<input type="text" id="kinhdottct" class="form-control" value="' + data.kinhdo + '" />' +
                    '</div>' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Vĩ độ</label>' +
                      '<input type="text" id="vidottct" class="form-control" value="' + data.vido + '" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Thuộc kênh</label>' +
                      '<input type="text" id="thuockenhttct" class="form-control" value="' + data.thuockenh + '" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Loại hố ga</label>' +
                      '<input type="text" id="loaihogattct" class="form-control" value="' + data.loaihoga + '" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Chiều cao</label>' +
                      '<input type="text" id="chieucaottct" class="form-control" value="' + data.chieucao + '" />' +
                    '</div>' +
                    '<div class="formline">' +
                        '<label class="form-label">Năm xây dựng</label>' +
                        '<input type="text" class="form-control" value="' + data.nam_xaydung + '" id="namxayttct"/>' +
                        '<span class="input-group-append"></span>' +
                    '</div>' +
                    '<div class="formline">' +
                        '<label class="form-label">Năm bàn giao</label>' +
                        '<input type="text" class="form-control" value="' + data.nam_bangiao + '" id="nambangiaottct"/>' +
                        '<span class="input-group-append"></span>'+
                    '</div>'+
                    '<button type="submit" class="btn btn-primary savett">Lưu thông tin</button>'+
                  '</fieldset>'+
                 '</form>';
    }
};
    var istoggle = false;
    function Hideshow() {
        $(".table-ttbd").toggle();
        $("#fduytubd").toggle();
        istoggle = !istoggle;
        if (istoggle) {
            $(".addnewinfo").text("Quay lại");
        }else{
            $(".addnewinfo").text("Thêm mới thông tin");
        }
    }

var popupdtbd = {
    Duytubaoduong: function (data) {
        var tableRows = '';
        for (var i = 0; i < data.length; i++) {
            tableRows +='<tr>' +
                '<th scope="row">' + (i + 1) +  '</th>' +
                '<td>' + data[i].kyhieu + '</td>' +
                '<td>' + data[i].spqd + '</td>' +
                '<td>' + data[i].diadiem + '</td>' +
                '<td>' + data[i].kinhphi + '</td>' +
                '</tr>';
        };
        return '<div class="stitlebd"><h4 class="">Duy tu bảo dưỡng công trình</h4><hr><a class="addnewinfo" onclick="Hideshow()">Thêm mới thông tin </a></div>' +
            '<div class="table-responsive table-ttbd">' +
                  '<table class="table">' +
                      '<thead>' +
                        '<tr>' +
                          '<th scope="col">STT</th>' +
                          '<th scope="col">Ký hiệu</th>' +
                          '<th scope="col">Số quyết định</th>' +
                          '<th scope="col">Địa điểm</th>' +
                          '<th scope="col">Kinh phí</th>' +
                          '<th scope="col">Thao tác</th>' +
                        '</tr>' +
                     '</thead>' +
                      '<tbody>' +
                            tableRows +
                      '</tbody>' +
                  '</table>' +
                '</div>' +
                '<form class="form-ttct" id="fduytubd" style="display:none;">' +
                '<fieldset >' +
                    '<div class="formline">' +
                      '<label class="form-label">Ký hiệu</label>' +
                      '<input type="text" id="kyhieudtbd" class="form-control" value="" autofocus />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Phân loại</label>' +
                      '<input type="text" id="phanloaidtbd" class="form-control" value="" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Tỉnh</label>' +
                       '<select id="tinhdtbd" onchange="updateHuyen();">' +
                          '<option value=""></option>'+
                       '</select>'+
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Huyện</label>' +
                      '<select id="huyendtbd">' +
                          '<option value=""></option>' +
                       '</select>' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Địa điểm</label>' +
                      '<input type="text" id="diadiemdtbd" class="form-control" value="" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Tổng chiều dài (m)</label>' +
                      '<input type="text" id="tongchieudai" class="form-control" value="" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Giải pháp kỹ thuật</label>' +
                      '<input type="text" id="giaiphapkythuat" class="form-control" value="" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Vật liệu xây dựng</label>' +
                      '<input type="text" id="vatlieuxaydung" class="form-control" value="" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Kinh phí (triệu đồng)</label>' +
                      '<input type="text" id="kinhphidtbd" class="form-control" value="" />' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Thời gian thực hiện</label>' +
                      '<div class="durationtime-bd">'+
                      '<p> Từ </p>'+
                      '<input type="text" class="form-control" value="" id="thoigianbatdauth"/>' +
                      '<span class="input-group-append"></span>' +
                      '<p>- đến </p>' +
                      '<input type="text" class="form-control" value="" id="thoigianketthucth"/>' +
                      '<span class="input-group-append"></span>' +
                      '</div>' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Nguồn vốn</label>' +
                      '<select id="nguonvondtbd">' +
                          '<option value="0"></option>' +
                          '<option value="1">Bảo dưỡng thường xuyên</option>' +
                          '<option value="2">Duy tu bảo dưỡng</option>' +
                          '<option value="3">Bảo dưỡng đặc biệt</option>' +
                      '</select>' +
                    '</div>' +
                    '<div class="formline">' +
                      '<label class="form-label">Số quyết định</label>' +
                      '<input type="text" id="soquyetdinhdtbd" class="form-control" value="" />' +
                    '</div>' +
                    '<div class="formline">' +
                        '<label class="form-label">Ngày quyết định</label>' +
                        '<input type="text" class="form-control" value="" id="ngayquyetdinh"/>' +
                        '<span class="input-group-append"></span>' +
                    '</div>' +
                    '<button type="submit" class="btn btn-primary savett">Lưu thông tin</button>' +
                  '</fieldset>'+
                '</form>';
    },

};

var popuphs = {
    Hosotailieu: function () {
        return '<div class="" id ="filemanager"></div>';
    },
    Hinhanhtl : function () {
        return '<div id="Imagesmanager"></div>';
    },
};

var contenthoga =
    '<ul class="nav nav-tabs" id="myTab" role="tablist">' +
      '<li class="nav-item" role="presentation">' +
        '<button class="nav-link active" id="tabthongtinchung" data-bs-toggle="tab" data-bs-target="#thongtinchung" type="button" role="tab" aria-controls="thongtinchung" aria-selected="true">Thông tin</button>' +
      '</li>' +
      '<li class="nav-item" role="presentation">' +
        '<button class="nav-link" id="tab-duytubaoduong" data-bs-toggle="tab" data-bs-target="#duytubaoduong" type="button" role="tab" aria-controls="duytubaoduong" aria-selected="false">Duy tu , bảo dưỡng </button>' +
      '</li>' +
      '<li class="nav-item" role="presentation">' +
        '<button class="nav-link" id="tab-hoso" data-bs-toggle="tab" data-bs-target="#hosott" type="button" role="tab" aria-controls="hosott" aria-selected="false">Hồ sơ</button>' +
      '</li>' +
      '<li class="nav-item" role="presentation">' +
        '<button class="nav-link" id="tab-hinhanh" data-bs-toggle="tab" data-bs-target="#hinhanhtt" type="button" role="tab" aria-controls="hinhanhtt" aria-selected="false">Hình ảnh</button>' +
      '</li>' +
    '</ul>' +
    '<div class="tab-content" id="myTabContent">' +
      '<div class="tab-pane fade show active" id="thongtinchung" role="tabpanel" tabindex="0"></div>' +
      '<div class="tab-pane fade" id="duytubaoduong" role="tabpanel" tabindex="0"></div>' +
      '<div class="tab-pane fade" id="hosott" role="tabpanel" tabindex="0"></div>' +
      '<div class="tab-pane fade" id="hinhanhtt" role="tabpanel"  tabindex="0"></div>' +
    '</div>';
    
function populateTinh() {
    $.ajax({
        url: '/DulieuNT/Thongtintinh', 
        type: 'GET',
        success: function(response) {
            if (response.success) {
              const tinhSelect = $("#tinhdtbd");
                response.data.forEach(function(tinh) {
                    tinhSelect.append(new Option(tinh.ten_tinh, tinh.gid));
                });
            } else {
                alert(response.message);
            }
        },
        error: function() {
            alert('Error while fetching province data.');
        }
    });
}
function updateHuyen() {
  const selectedTinh = $("#tinhdtbd").val();
  const huyenSelect = $("#huyendtbd");

    // Xóa tất cả các huyện hiện tại
    huyenSelect.empty();
    huyenSelect.append(new Option("Chọn huyện", ""));
  
    // Kiểm tra nếu có tỉnh được chọn
    if (selectedTinh) {
        $.ajax({
            url: '/DulieuNT/Thongtinhuyen', // Đường dẫn tới phương thức Thongtinhuyen
            type: 'GET',
            data: { idtinh: selectedTinh },
            success: function(response) {
                if (response.success) {
                    response.data.forEach(function(huyen) {
                        huyenSelect.append(new Option(huyen.ten_huyen, huyen.gid));
                    });
                } else {
                    alert(response.message);
                }
            },
            error: function() {
                alert('Error while fetching district data.');
            }
        });
    }
}

map.on('click', 'ho-ga-tantai', function (e) {
    popup.remove();
    var infor = e.features[0].properties;
    var id = infor.id;

    $.ajax({
        url: '/DulieuNT/Thongtinhoga',
        method: 'GET',
        data: {
            idhoga: id
        },
        dataType: 'json',
        success: function (response) {
            if (response.success) {
                var data = response.data[0];
                
                $("#index-chitietct").html(contenthoga);
                $("#thongtinchung").html(popupttct.thongtinhoga(data));
                $("#duytubaoduong").html(popupdtbd.Duytubaoduong(data));
                populateTinh();
                $("#hosott").html(popuphs.Hosotailieu());
                FnFilemanager.Loaddulieu(data);
                $("#hinhanhtt").html(popuphs.Hinhanhtl());
                FnFilemanager.Loaddataanh(data);
                // Open the popup
                functionlayer.createWindowPopup("index-chitietct", "Thông tin kênh", 'auto', 'auto', $(window).height() - 70, ($(window).width() / 2), true);

                $('#nambangiaottct').datepicker({
                     format: "yyyy",
                     viewMode: "years",
                     minViewMode: "years"
                });
                $('#namxayttct').datepicker({
                    format: "yyyy",
                    viewMode: "years",
                    minViewMode: "years"
                });

                $('#ngayquyetdinh').datepicker({
                    format: "dd/mm/yyyy",
                });
                $('#thoigianketthucth').datepicker({
                    format: "yyyy",
                    viewMode: "years",
                    minViewMode: "years"
                });
                $('#thoigianbatdauth').datepicker({
                    format: "yyyy",
                    viewMode: "years",
                    minViewMode: "years"
                });
                

            } else {
                alert(response.message);
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
});
