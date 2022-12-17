# Lookup the runif() function. Create a 3x4 matrix with 12 random numbers generated using the runif() function; have the matrix be filled our row-by-row, instead of column-by-column.

# Name the columns of the matrix uno, dos, tres, cuatro, and the rows x, y, z.
my.mat <- matrix(runif(12), nrow = 3, byrow = TRUE, dimnames = list(c("x", "y", "z"),
                                                                    c("uno", "dos", "tres", "cuatro")))
# Scale the matrix by 10 and save the result.
my.mat<- my.mat*10
# Extract a 2x4 matrix from it and save the result.
s.mat<-my.mat[1:2,]
# Subtract the smaller matrix from the larger one. Can you do that? Why?
my.mat-s.mat
# Extract a 3x3 matrix from the original matrix and save the result. Try the subtraction again. Can you do that? Why?
o.mat<-my.mat[,-4]
o.mat
# Extract the column called "uno" as a vector from the original matrix and save the result. Try the subtraction again. Can you do that? Why?
s<-my.mat[,"uno"]
my.mat-s
# Lookup the rnorm() function. Create a new 3x4 matrix with 12 random values generated using the rnorm() function.
new.mat <- matrix(rnorm(12), nrow = 3, byrow = TRUE)
my.mat * new.mat
# Perform matrix multiplication (using the * sign). Can you do that? How is the operation carried out?
  my.mat %*% t(new.mat) transpose needed to perform multiplication as the cols of 1st and rows of 2nd should be the same
# Perform inner matrix multiplication with the two matrixes. Can you do that? Why? Can you think of something to do to make this possible?