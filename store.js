// 渲染产品的接口

// 返回数据
const data = [
    {
        id: "one",
        title: '裤子',
        words: '描述1',
        cost: '¥100',
        img: './a1.jpg'
    },
    {
        id: "two",
        title: '衣服',
        words: '描述2',
        cost: '¥120',
        img: './a2.jpg'
    },
    {
        id: "three",
        title: '衣服',
        words: '描述2',
        cost: '¥220',
        img: './a3.jpg'
    },
    {
        id: "four",
        title: '衣服',
        words: '描述2',
        cost: '¥110',
        img: './a4.jpg'
    },
    {
        id: "five",
        title: '衣服',
        words: '描述2',
        cost: '¥10',
        img: './a5.jpg'
    }
]

//首页列表渲染 组件
function list(data) {
    data.map((item, index) => {
        console.log(index)
        let str =
            `<div class="card m-2" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top picture1" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.words}</p>
              <p class="card-text">${item.cost}</p>
              <button href="#" class="btn btn-primary" 
                onclick="add(${index})"
              >加入购物车</button>
            </div>
          </div>`
        $("#container_list").append(str)
    })
}

// 定义加入购物车
const add = (index) => {
    if (cars.length === 0) {
        cars.push({ ...data[index], count: 1 })
    } else {
        let status = false;
        cars.map((item) => {
            if (item.id === data[index].id) { //是否已经添加过
                item.count++
                status = true
            }
        })
        if (!status) {
            cars.push({ ...data[index], count: 1 })
        }
    }
    show(cars)
}
//开始渲染页面
list(data);


//购物车的数据
let cars = []
//渲染购物车
function show(cars) {
    let str;
    if (cars.length === 0) {
        str = ''
    } else {
        cars.map((item, index) => {
            str +=
                `<tr id="${item.id}">
            <td>${index}</td>
            <td>${item.title}</td>
            <td><img src="${item.img}" class="picture"/></td>
            <td>
            <button href="#" class="btn btn-primary danger" 
            onclick="lowerCount(${index})"
            >-</button>
            ${item.count}
            <button href="#" class="btn btn-primary danger" 
               onclick="addCount(${index})"
            >+</button>
            </td>
            <td>
            <button href="#" class="btn btn-primary danger" 
            onclick="del(${index})"
              >删除</button>
            </td>
          </tr>`
        })
    }

    $("#table").html(str)
}

//购物车选项单项增加按键
function addCount(index) {
    cars[index].count++
    show(cars)
}

//购物车选项单项减少按键  最少为1
function lowerCount(index) {
    if (cars[index].count === 1) {
        alert("数量最少为1")
    } else {
        cars[index].count--
    }
    show(cars)
}

//购物车选项单项删除
function del(index) {
    // $(`#${cars[index].id}`).remove()
    cars.splice(index, 1);
    show(cars)
}

//提交购物车数据
function submit() {
    console.log(cars)
}


