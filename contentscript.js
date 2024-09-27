$(function () {
    const type = location.pathname.split('/').filter(item => item);
    const domain = location.hostname.split('.').slice(-1)[0];
    switch(type[0]) {
        case 'product': {
            const productId = $('[rel-script="product-add-to-cart"]').attr('data-product-id');
            $('.product-single__sticky').prepend(`<a class="admin-btn" target="_blank" href="https://admin.coolmate.${domain}/products/edit/${productId}">Vô Admin</a>`);
            break;
        }
        case 'collection': {
            const collectionId = $('.site-collections').attr('data-collection-id');
            console.log("🚀 ~ TOOL -> CollectionId:", collectionId)
            $('.site-collections').css('position', 'relative');
            $('.site-collections').append(`<a class="admin-collection-btn" target="_blank" href="https://admin.coolmate.me/collections/edit/${collectionId}">Vô Admin</a>`);
            break;
        }
        default:
            break;
    }
});