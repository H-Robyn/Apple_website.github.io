
let bag_list_div = document.getElementById('bag_list');

bag_list_div.onclick = function show_hide_bag()
{
    let bag = document.getElementById('baglist');
    if(bag.style.display =='none')
        this.style.display = 'block';
    else
        this.style.display = 'none';
};