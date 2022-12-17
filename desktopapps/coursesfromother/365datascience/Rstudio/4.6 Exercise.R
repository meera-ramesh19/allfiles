# Requirements: the following vectors: the named atk object from the previous exercise.
atk <- c("Blue-Eyes White Dragon" = 3000, "Exodius" = NA, "The Winged Dragon of Ra" = NA,
         +          "Raigeki" = NA, "Slifer the Sky Dragon" = NA, "Obelisk the Tormentor" = 4000, 
         +          "Black Luster Soldier" = 3000, "5-Headed Dragon" = 5000, "Exodia the Forbidden One" = 1000, 
         +          "Dragon Master Knight" = 5000)
# Extract the following values from the atk object:
  atk
#The 6-th value (can you do it in more than one way)
atk[6]
#All the values but the 2nd one
atk[-2]
#Values 1, 3, 5, 7, and 9
atk[c(1,3,5,7,9)]
#All the values but the 4th, 5th, and 6th
atk[-(4:6)]
#All the values larger than 2000
atk[atk>30]
