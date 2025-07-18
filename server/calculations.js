const fs = require('fs');
const path = require('path');

function loadJSONs(){
const productsRaw = fs.readFileSync(path.join('/Users/talwind/Documents/code/my-app/server/', 'data', 'product_assignment.json'), 'utf-8');
const chargesRaw = fs.readFileSync(path.join('/Users/talwind/Documents/code/my-app/server/', 'data', 'product_charges.json'), 'utf-8');
const products = JSON.parse(productsRaw);
const charges = JSON.parse(chargesRaw);

return { products, charges }

}

function dataReady(){
  
}


function mergeRoomProducts(productAssignments, productCharges) {
  // Create a map of products - for quick lookup
  const assignmentMap = new Map(
    productAssignments.map(assignment => {
      assignment.special_product_assignment_id, 
      assignment
    })
  );
}
  // Group products by room (reservation_uuid)
  const roomsMap = new Map();
  
module.exports = {
  mergeRoomProducts,
  calculateSummaryStats,
  formatForTable,
  processRoomProducts,
  loadJSONs,
};