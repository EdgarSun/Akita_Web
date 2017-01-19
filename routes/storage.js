
/*
 * GET home page.
 */

exports.storage = function(req, res){
  res.render('storage.html', { title: 'Cloudant Boiler Plate' });
};