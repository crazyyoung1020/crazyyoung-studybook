let res = [
  {
    id: 1,
    date: '2016-05-02',
    name: '深圳平台公司',
    address: '上海市普陀区金沙江路 1518 弄',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: '二级 深圳',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [
          {
            id: 66,
            date: '2016-05-01',
            name: '三级 中信红树湾',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [
              {
                id: 50,
                date: '2016-05-01',
                name: '1会理财',
                address: '上海市普陀区金沙江路 1519 弄'
              },
              {
                id: 60,
                date: '2016-05-01',
                name: '2会理财',
                address: '上海市普陀区金沙江路 1519 弄',
                children: [
                  {
                    id: 51,
                    date: '2016-05-01',
                    name: '1.1五级 王小虎大孙子',
                    address: '上海市普陀区金沙江路 1519 弄'
                  },
                  {
                    id: 61,
                    date: '2016-05-01',
                    name: '1.1五级 王小虎小孙子',
                    address: '上海市普陀区金沙江路 1519 弄',
                    children: [
                      {
                        id: 52,
                        date: '2016-05-01',
                        name: '1.1.1六级 王小虎大孙子',
                        address: '上海市普陀区金沙江路 1519 弄'
                      },
                      {
                        id: 62,
                        date: '2016-05-01',
                        name: '1.1.2六级 王小虎小重孙',
                        address: '上海市普陀区金沙江路 1519 弄'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 55,
            date: '2016-05-01',
            name: '三级 中信玖龙玺',
            address: '上海市普陀区金沙江路 1519 弄'
          }
        ]
      },
      {
        id: 32,
        date: '2016-05-01',
        name: '二级 王小虎叔叔',
        address: '上海市普陀区金沙江路 1519 弄'
      }
    ]
  },
  {
    id: 10,
    date: '2016-05-01',
    name: '一级 王小虎爷爷',
    address: '上海市普陀区金沙江路 1519 弄',
    children: [
      {
        id: 11,
        date: '2016-05-01',
        name: '二级 王小虎爸爸',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [
          {
            id: 12,
            date: '2016-05-01',
            name: '三级 王小虎哥哥',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            id: 13,
            date: '2016-05-01',
            name: '三级 王小虎本虎',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [
              {
                id: 14,
                date: '2016-05-01',
                name: '四级 王小虎大儿子',
                address: '上海市普陀区金沙江路 1519 弄'
              },
              {
                id: 15,
                date: '2016-05-01',
                name: '四级 王小虎小儿子',
                address: '上海市普陀区金沙江路 1519 弄',
                children: [
                  {
                    id: 16,
                    date: '2016-05-01',
                    name: '五级 王小虎大孙子',
                    address: '上海市普陀区金沙江路 1519 弄'
                  },
                  {
                    id: 17,
                    date: '2016-05-01',
                    name: '五级 王小虎小孙子',
                    address: '上海市普陀区金沙江路 1519 弄',
                    children: [
                      {
                        id: 18,
                        date: '2016-05-01',
                        name: '六级 王小虎大孙子',
                        address: '上海市普陀区金沙江路 1519 弄'
                      },
                      {
                        id: 19,
                        date: '2016-05-01',
                        name: '六级 王小虎小重孙',
                        address: '上海市普陀区金沙江路 1519 弄'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 20,
        date: '2016-05-01',
        name: '二级 王小虎叔叔',
        address: '上海市普陀区金沙江路 1519 弄'
      }
    ]
  }
];


function recur(data,height=0){
  for (let i = 0; i < data.length; i++) {
    data[i].height = height;
    if(data[i].children&&data[i].children.length){
      recur(data[i].children,height+1);
    }
  }
}

recur(res)
console.log(res);