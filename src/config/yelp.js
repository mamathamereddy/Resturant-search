/* 4 */
import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer xm1z59Gp4nr7gDoacFwS62acYQ0CJytY_H_gBrj7NBBMQMGveOKyyf8OrFXARu3ADmlalJKl3cZQgCLM1TNtPpbuW4XWTEubGmye36LgJ-BlHv16SCDyV0vBG8gBX3Yx",
  },
});
