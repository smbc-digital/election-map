const wardPopup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Ward</p>
    <p></p>
    <p class="info">Name: ${feature.properties.ward_name}</p>
    </div>`
  layer.bindPopup(content)
}

const polling_districtsPopup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Polling District</p>
    <p></p>
    <p class="info">Name: ${feature.properties.polling_name}</p>
    </div>`
  layer.bindPopup(content)
}

const polling_stationsPopup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-list" aria-hidden="true"></i><p class="title">Polling Station</p>
  <p></p>
  <p class="info">No: ${feature.properties.station_no}</p>
  <p class="info">Address: ${feature.properties.address}</p>
  </div>`
}

export {
  wardPopup,
  polling_districtsPopup,
  polling_stationsPopup
}