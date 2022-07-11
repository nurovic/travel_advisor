import axios from 'axios'



export const getPlacesData = async (type, sw, ne) => {
    try {
        const {
          data: { data },
        } = await axios.get( `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            "X-RapidAPI-Key": "c0673cbcdcmsh768b34b7ae17126p15a97ejsne1fab409e660",
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          },
        });
        
        return data
    } catch (error) {
        console.log(error);
        
    }
}