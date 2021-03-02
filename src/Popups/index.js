const wardPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Ward</span>
    </div>
      <div class="smbc-map__item__body">
      <p>Name: ${feature.properties.ward_name}</p>
    </div>
  </div>`
  layer.bindPopup(content)
}

const polling_districtsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Polling District</span>
    </div>
      <div class="smbc-map__item__body">
        <p>Name: ${feature.properties.polling_name}</p>
    </div>
  </div>`

  layer.bindPopup(content)
}

const polling_stationsPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Polling Station</span>
    </div>
      <div class="smbc-map__item__body">
        <p> Polling Station No: ${feature.properties.station_no}</p>
        <p>Address: ${feature.properties.address}</p>
    </div>
  </div>`
  layer.bindPopup(content)
}

export {
  wardPopup,
  polling_districtsPopup,
  polling_stationsPopup
}