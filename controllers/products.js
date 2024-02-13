const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};


exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};


exports.getProducts = (req, res, next) => {
    // const products = adminData.products; --not needed as products array is present already. 
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
};