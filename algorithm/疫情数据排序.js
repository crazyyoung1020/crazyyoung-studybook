let arr = [
  {
    x: '沈阳',
    y: '61.5300',
    s: '最新数据'
  },
  {
    x: '长春',
    y: '47.7500',
    s: '最新数据'
  },
  {
    x: '北京',
    y: '46.0000',
    s: '最新数据'
  },
  {
    x: '济南',
    y: '45.6300',
    s: '最新数据'
  },
  {
    x: '佛山',
    y: '45.3000',
    s: '最新数据'
  },
  {
    x: '深圳',
    y: '44.7500',
    s: '最新数据'
  },
  {
    x: '广州',
    y: '41.8500',
    s: '最新数据'
  },
  {
    x: '西安',
    y: '40.6900',
    s: '最新数据'
  },
  {
    x: '成都',
    y: '38.6900',
    s: '最新数据'
  },
  {
    x: '武汉',
    y: '38.6900',
    s: '最新数据'
  },
  {
    x: '苏州',
    y: '38.4300',
    s: '最新数据'
  },
  {
    x: '重庆',
    y: '35.9800',
    s: '最新数据'
  },
  {
    x: '上海',
    y: '31.1800',
    s: '最新数据'
  },
  {
    x: '海纳',
    y: '28.5400',
    s: '最新数据'
  },
  {
    x: '佛山',
    y: '73.2700',
    s: '去年同期数据'
  },
  {
    x: '深圳',
    y: '68.8700',
    s: '去年同期数据'
  },
  {
    x: '广州',
    y: '68.0300',
    s: '去年同期数据'
  },
  {
    x: '沈阳',
    y: '64.9900',
    s: '去年同期数据'
  },
  {
    x: '济南',
    y: '52.4300',
    s: '去年同期数据'
  },
  {
    x: '成都',
    y: '50.4200',
    s: '去年同期数据'
  },
  {
    x: '长春',
    y: '48.7400',
    s: '去年同期数据'
  },
  {
    x: '重庆',
    y: '47.2400',
    s: '去年同期数据'
  },
  {
    x: '北京',
    y: '45.5500',
    s: '去年同期数据'
  },
  {
    x: '武汉',
    y: '45.4900',
    s: '去年同期数据'
  },
  {
    x: '苏州',
    y: '42.0000',
    s: '去年同期数据'
  },
  {
    x: '上海',
    y: '39.5500',
    s: '去年同期数据'
  },
  {
    x: '海纳',
    y: '36.9900',
    s: '去年同期数据'
  },
  {
    x: '西安',
    y: '36.5100',
    s: '去年同期数据'
  }
];

// 用来存放”最新数据“的数据
// let newYearArr = [];
// let lastYearMap = {};
// for (let i = 0; i < arr.length; i++) {
//   // 遍历数组，如果遇到最新数据，那么放入新数组
//   if (/最新/.test(arr[i].s)) {
//     newYearArr.push(arr[i]);
//     // 如果遇到去年的数，就放入map中，以城市为key
//   } else if (/去年/.test(arr[i].s)) {
//     lastYearMap[arr[i].x] = arr[i];
//   }
// }
// let lastYearArr = [];
// // 遍历今年数据的数组，然后用每一项的城市去map里面找数据，再放入去年数据的数组中
// for (let i = 0; i < newYearArr.length; i++) {
//   lastYearArr.push(lastYearMap[arr[i].x]);
// }

// // 拼接一波
// let newArr = lastYearArr.concat(newYearArr);

// 用来存放”最新数据“的数据
let newYearArr = [];
let lastYearArr = [];
for (let i = 0; i < arr.length; i++) {
  // 遍历数组，如果遇到最新数据，那么放入新数组
  if (/最新/.test(arr[i].s)) {
    newYearArr.push(arr[i]);
    // 如果遇到去年的数，就放入map中，以城市为key
  } else if (/去年/.test(arr[i].s)) {
    lastYearArr.push(arr[i]);
  }
}

// 把最新数据的城市拿出来放在一个新的数组
let order = [];
for (let i = 0; i < newYearArr.length; i++) {
  order.push(newYearArr[i].x);
}

// 让去年的数据根据城市数据来排序
lastYearArr.sort((a, b) => {
  return order.indexOf(a.x) - order.indexOf(b.x);
});

// 拼接一波
let newArr = lastYearArr.concat(newYearArr);
