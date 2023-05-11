$(document).ready(function () {
    
    function getData () {
        $.ajax({
            url: "data.json",
            method: "GET",
            dataType: "json",
            success: function (response) {
                $(".list").html("");
                let searchKeyword = $("input[name=search]").val();
                console.log(searchKeyword);
                // filter 

                let data = response.filter(function(item) {
                    return item.name.toUpperCase().includes(searchKeyword.toUpperCase());
                })
                console.log(data);
                data.forEach(function (item) {
                    let id = item.id;
                    $(".list").append(`
                        <li class="item" data-id="${item.id}"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div class="ava">
                            <img src="${item.image}">
                            <div class="ava-info">
                                <p>${item.name} ${item.age} Tuổi</p>
                                <p class="area"><em></em> ${item.location}</p>
                            </div>
                        </div>
                        <div class="content">
                            <div class="info">
                            </div>
                            <div class="taga">
                               
                            </div>
    
                            <div class="call">Xin số điện thoại</div>
                        </div>
                    </li>
                    `
                    )
                    item.hobbies.forEach(function (hobbie) {
                        $('.list').find('.item[data-id="' + id + '"]').find(".taga").append(
                            `<span>${hobbie}</span>`
                        );
                    }) 
                });
            }
        })
    }

    $("#search").click(function () {
        getData();
    })


    getData();
})
