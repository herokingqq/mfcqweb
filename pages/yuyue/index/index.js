
var app = getApp();
Page({
  data: {
    classes_array: [
      { name: '09:00-11:00', checked: false, isOrNotSelect: true },
      { name: '11:00-13:00', checked: false, isOrNotSelect: true },
      { name: '13:00-15:00', checked: false, isOrNotSelect: true },
      { name: '15:00-17:00', checked: false, isOrNotSelect: true },
      { name: '17:00-19:00', checked: false, isOrNotSelect: true }
    ]
  },


  //点击radio-group中的列表项事件
  radiochange: function (res) {
    console.log("选中的标签：" + res.detail.value);
    var arrs = this.data.classes_array;
    var that = this;
    for (const x in arrs) {
      if (arrs[x].name == res.detail.value) {
        arrs[x].checked = true;
      } else {
        arrs[x].checked = false;
      }
    }
    that.setData({
      classes_array: arrs
    })
  },
})