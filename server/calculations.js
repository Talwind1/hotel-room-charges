const fs = require('fs');
const path = require('path');

function loadJSONs(){
const productsRaw = fs.readFileSync(path.join('/Users/talwind/Documents/code/my-app/server/', 'data', 'product_assignment.json'), 'utf-8');
const chargesRaw = fs.readFileSync(path.join('/Users/talwind/Documents/code/my-app/server/', 'data', 'product_charges.json'), 'utf-8');
const products = JSON.parse(productsRaw);
const charges = JSON.parse(chargesRaw);

return { products, charges }

}

function mergeRoomProducts(productAssignments, productCharges) {
  // Create a map of products - for quick lookup

  const chargesMap = new Map(
    productCharges.map(charge => [
      charge.special_product_assignment_id, 
      { 
        status: charge.active? "charged" : "cancelled", 
        amount: charge.amount,
      }
    ])
  )
  
  const roomsMap = productAssignments.reduce((roomsMap, product) => {
      const charge = chargesMap.get(product.id)
      if (charge) {
        let room_id = product.reservation_uuid
        let active = charge.status == 'charged' 
        room = roomsMap.get(product.reservation_uuid)
        if (room){
          room.items.push({...charge, name:product.name})
          room.sum_items = active ? room.sum_items + charge.amount : room.sum_items
          room.count_items = active ? room.count_items + 1 : room.count_items
        } 
        else {
          const room = { id: product.reservation_uuid, items: [{...charge, name:product.name}], count_items: active ? 1 : 0, sum_items: active ? charge.amount : 0 }
          roomsMap.set(room_id, room)
        }
      }
      return roomsMap;
    }, new Map())
  
   return roomsMap
} 

function runData(){
  let { products, charges } =  loadJSONs()
  roomMap = mergeRoomProducts(products, charges)
  return roomMap
}


module.exports = {
  loadJSONs,
  mergeRoomProducts,
  runData
};