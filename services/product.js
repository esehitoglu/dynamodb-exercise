const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "",
    secretAccessKey: "",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
})

let docClient = new AWS.DynamoDB.DocumentClient()
var table = "products"

exports.add = async(params)=>{
    const item = {
        TableName:table,
        Item:{
            productId: uuidv4(),
            stock: params.stock,
            productName: params.productName,
            isDiscount: params.isDiscount,
            category: {
            categoryId: Math.random()*169999,
            categoryName: params.categoryName,
            }
        }
    }
    try{
        await docClient.put(item).promise()
        return{
            status:true,
            message:"Kategori eklendi"
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}

exports.single = async(params)=>{
    console.log('geldik')
    var items = {
        TableName:table,
        Key:{
            "id": params.id,
        }
    };
    
    try{
        await docClient.get(items).promise()
        return{
            status:true,
            message:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}

exports.fetchAll = async(params)=>{
    console.log('geldik')
    var items = {
        TableName: table
    };
    try{
        const data = await docClient.scan(items).promise()
        return{
            status:true,
            message:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}

exports.update = async(params)=>{
    console.log(params)
    var items = {
        TableName:table,
        Key:{
            "id": params.id,
        },
        UpdateExpression: "set categoryName = :categoryName",
        ExpressionAttributeValues:{
            ":categoryName":params.categoryName,
        },
        ReturnValues:"UPDATED_NEW"
    }
    try{
        await docClient.update(items).promise()
        return{
            status:true,
            message:"veri güncellendi"
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}

exports.delete = async(params)=>{
    console.log('geldik')
    var items = {
        TableName:table,
        Key:{
            "id": params.id,
        }
        
    };
    try{
        await docClient.delete(items).promise()
        return{
            status:true,
            message:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}
