// Copyright srcmake.com 2018
var NS = 'org.example.empty';
/**
 * so update the car.
 * @param {org.example.empty.tran} book - the car transaction
 * @transaction
 */
async function transfer(book){
  var old_owner = book.car.ownership.id_card;
  var old_occupy = book.car.occupy.id_card;
  var old_contract = book.car.contract;
  var old_officer = book.car.officer.id_card; 
    
  book.car.ownership = book.ownership;
  book.car.occupy = book.occupy;
  book.car.contract = book.contract;
  book.car.officer = book.officer;
  book.car.no = book.car.no + 1;
  
      // Get the asset registry for the asset.
  const assetRegistry = await getAssetRegistry('org.example.empty.car_book');
    // Update the asset in the asset registry.
  await assetRegistry.update(book.car);
  
  var event = getFactory().newEvent(NS, 'tran_event');
  event.num_book = book.car.num_book;
  event.no = book.car.no;
  event.regis_date = book.car.regis_date;
  event.first_regis = book.car.first_regis;
  event.last_regis = book.car.last_regis;
  event.county = book.car.county;
  event.car_trye = book.car.car_trye;
  event.brand = book.car.brand;
  event.model = book.car.model;
  event.year = book.car.year;
  event.color_1 = book.car.color_1;
  event.color_2 = book.car.color_2;
  event.color_3 = book.car.color_3;
  event.car_num = book.car.car_num;
  event.where_car_num = book.car.where_car_num;
  event.engine_type = book.car.engine_type;
  event.piston = book.car.piston;
  event.cc = book.car.cc;
  event.power_horse = book.car.power_horse;
  event.engine_num = book.car.engine_num;
  event.where_engine_num = book.car.where_engine_num;
  event.fuel = book.car.fuel;
  event.weight = book.car.weight;
  event.total_weight = book.car.total_weight;
  event.sit = book.car.sit;
  event.ownership = old_owner;
  event.occupy = old_occupy;
  event.contract = old_contract;
  event.officer = old_officer;
  emit(event);

}


/**
 * update the car.
 * @param {org.example.empty.edit} book -update the car
 * @transaction
 */
async function edit(book){
  var first_regis = book.car.first_regis;
  var last_regis = book.car.last_regis;
  var county = book.car.county;
  var color_1 = book.car.color_1;
  var color_2 = book.car.color_2;
  var color_3 = book.car.color_3;
  var engine_type = book.car.engine_type;
  var piston = book.car.piston;
  var cc = book.car.cc;
  var power_horse = book.car.power_horse;
  var engine_num = book.car.engine_num;
  var where_engine_num = book.car.where_engine_num;
  var fuel = book.car.fuel;
  var weight = book.car.weight;
  var total_weight = book.car.total_weight;
  var sit = book.car.sit;
    
  book.car.first_regis = book.first_regis;
  book.car.last_regis = book.last_regis;
  book.car.county = book.county;
  book.car.color_1 = book.color_1;
  book.car.color_2 = book.color_2;
  book.car.color_3 = book.color_3;
  book.car.engine_type = book.engine_type;
  book.car.piston = book.piston;
  book.car.cc = book.cc;
  book.car.power_horse = book.power_horse;
  book.car.engine_num = book.engine_num;
  book.car.where_engine_num = book.where_engine_num;
  book.car.fuel = book.fuel;
  book.car.weight = book.weight;
  book.car.total_weight = book.total_weight;
  book.car.sit = book.sit;
  book.car.no = book.car.no + 1;
  
      // Get the asset registry for the asset.
  const assetRegistry = await getAssetRegistry('org.example.empty.car_book');
    // Update the asset in the asset registry.
  await assetRegistry.update(book.car);
  
  var event = getFactory().newEvent(NS, 'tran_event');
  event.num_book = book.car.num_book;
  event.no = book.car.no;
  event.regis_date = book.car.regis_date;
  event.first_regis = first_regis;
  event.last_regis = last_regis;
  event.county = county;
  event.car_trye = book.car.car_trye;
  event.brand = book.car.brand;
  event.model = book.car.model;
  event.year = book.car.year;
  event.color_1 = color_1;
  event.color_2 = color_2;
  event.color_3 = color_3;
  event.car_num = book.car.car_num;
  event.where_car_num = book.car.where_car_num;
  event.engine_type = engine_type;
  event.piston = piston;
  event.cc = cc;
  event.power_horse = power_horse;
  event.engine_num = engine_num;
  event.where_engine_num = where_engine_num;
  event.fuel = fuel;
  event.weight = weight;
  event.total_weight = total_weight;
  event.sit = sit;
  event.ownership = book.car.ownership.id_card;
  event.occupy = book.car.occupy.id_card;
  event.contract = book.car.contract;
  event.officer = book.car.officer.id_card;
  emit(event);

}

/**
 * add user.
 * @param {org.example.empty.add_user} user - add user
 * @transaction
 */
async function add_user(user){
  let factory = getFactory();
  let new_user = factory.newResource(NS, 'user' , user.id_card);
  new_user.password = user.password;
  new_user.user_type = user.user_type;
  new_user.firstName = user.firstName;
  new_user.lastName = user.lastName;
  new_user.birth_day = user.birth_day;
  new_user.birth_month = user.birth_month;
  new_user.birth_year = user.birth_year;
  new_user.phone = user.phone;
  new_user.email = user.email;
  new_user.nationality = user.nationality;
  new_user.address = user.address;

  const participantRegistry = await getAssetRegistry(NS + '.user');
  await participantRegistry.add(new_user);
}


/**
 * add car.
 * @param {org.example.empty.add_car} car - add car
 * @transaction
 */
async function add_car(car){
  let factory = getFactory();
  let new_car = factory.newResource(NS, 'car_book' , car.num_book);
  new_car.no = 0;
  new_car.regis_date = car.regis_date;
  new_car.first_regis = car.first_regis;
  new_car.last_regis = car.last_regis;
  new_car.county = car.county;
  new_car.car_trye = car.car_trye;
  new_car.brand = car.brand;
  new_car.model = car.model;
  new_car.year = car.year;
  new_car.color_1 = car.color_1;
  new_car.color_2 = car.color_2;
  new_car.color_3 = car.color_3;
  new_car.car_num = car.car_num;
  new_car.where_car_num = car.where_car_num;
  new_car.engine_type = car.engine_type;
  new_car.piston = car.piston;
  new_car.cc = car.cc;
  new_car.power_horse = car.power_horse;
  new_car.engine_num = car.engine_num;
  new_car.where_engine_num = car.where_engine_num;
  new_car.fuel = car.fuel;
  new_car.weight = car.weight;
  new_car.total_weight = car.total_weight;
  new_car.sit = car.sit;
  new_car.ownership = car.ownership;
  new_car.occupy = car.occupy;
  new_car.contract = car.contract;
  new_car.officer = car.officer;
  
  const participantRegistry = await getAssetRegistry(NS + '.car_book');
  await participantRegistry.add(new_car);

}