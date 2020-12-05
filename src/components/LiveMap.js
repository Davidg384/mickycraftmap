import '../css/live-map.css'

function LiveMap() {

  let mapURL = "http://mc.mickycraft.com:8123";

  return (
    <section>
      <div className="live-map">
        <iframe src={mapURL} title="live-map"></iframe>
      </div>
    </section>
  );
}

export default LiveMap;
