import Dungeons from "./Dungeons";
import OverworldAreas from "./OverworldAreas";
import Grottos from "./Grottos";
import Houses from "./Houses";

const ValidStartPoints = [
    ...Object.keys(Dungeons),
    ...Object.keys(OverworldAreas),
    Grottos["Dampe's Grave"],
    Grottos["Diving Grotto"],
    Grottos["Diving Rupee Grotto"],
    Grottos["Forest Stage"],
    Grottos["Redead Grave"],
    Grottos["Redead Grotto"],
    Grottos["Royal Family's Tomb"],
    Grottos["Shield Grave"],
    Grottos["Wolfos Grotto"],
    Houses["Bombchu Bowling"],
    Houses["Bosses Hut"],
    Houses["Fishing"],
    Houses["Granny's Potion Shop"],
    Houses["Guard Hut/Poe Collector"],
    Houses["Impa's House Cow"],
    Houses["Lake Hylia Lab"],
    Houses["Link's House"],
    Houses["Lon Lon Tower"],
    Houses["Mask Shop"],
    Houses["Skulltula House"],
    Houses["Stable"],
    Houses["Temple of Time"],
    Houses["Treasure Chest Game"],
    Houses["Windmill"]
];

export default ValidStartPoints;