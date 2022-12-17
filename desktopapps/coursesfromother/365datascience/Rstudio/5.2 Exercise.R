# Pictured below is a matrix. Recreate this matrix in at least three different ways. 

#Player  Piece   
#[1,] "dark"  "king"  
#[2,] "dark"  "queen" 
#[3,] "dark"  "pawn"  
#[4,] "dark"  "pawn"  
#[5,] "dark"  "knight"
#[6,] "light" "bishop"
#[7,] "light" "king"  
#[8,] "light" "rook"  
#[9,] "light" "pawn"  
#[10,] "light" "pawn"  


# Hint. Use the dim() function,the matrix() function, and cbind().
x<-1:25
dim(x) <-c(5,5)
mtrx<-matrix( 1-10, nrow=5,ncol=5,byrow=TRUE)
mta<-c("dark","dark","dark","dark","dark","light","light","light","light","light")
de<-c("king","queen","pawn","pawn","knight","bishop","king","rook","pawn","pawn")
bind<-cbind(mta,de)
bind
# Can you think of a faster way to create this matrix?
  
# Assign names to it in two different ways.

# Would using rbind() be practical in this case?
  
# Can you think of a way to make adding a row to the matrix worthwhile?