const {gql}=require("apollo-server");
const typeDefs=gql`
enum Role{
ADMIN
SUPERADMIN
USER
}
type User{
id:ID
name:String
email:String
password:String
age:Int
role:String
}
type Authresponse{
message:String!
status:Int!
success:Boolean
user:User
}
type products{
id:ID
productname:String
quantity:Int
price:String

}
type Productresponse{
message:String!
status:Int!
success:Boolean
product:products
}
type Query{
login(email:String,password:String,role:String):Authresponse
products(id:ID):Productresponse
}
type Mutation{
signup(email:String,password:String,name:String,age:Int,role:String):Authresponse
addproduct(productname:String,quantity:Int,price:String):Productresponse
}
`
module.exports={typeDefs}