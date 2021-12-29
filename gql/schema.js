const {gql} = require("apollo-server");
const typeDefs = gql`
	type User {
		id: ID
		name: String
		username: String
		email: String
		sitioweb : String
		description :  String
		password :String
		avatar:String
		createdAt:String
	}
	type Token{
		token:String
	}
	input UserInput{
		name:String!
		username:String!
		email:String!
		password:String!
	}
	input LoginInput{
		email:String!
		password:String!
	}
	
	type Query {
		getUser: User 
	}

	type Mutation {
		register(input:UserInput):User
	}
	type Mutation {
		login(input:LoginInput):Token
	}

`;

module.exports=typeDefs;