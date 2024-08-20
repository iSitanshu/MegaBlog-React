import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    //Extra Info
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error ", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: UpdatePost :: error ", error);
        }
    }

    async deletePost(slug){
        try {
            await this.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error ", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error ", error);
        }
    }

    //sirf vo value jinka status active ho
    async getPosts(queries = [Query.equal("status",
    "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts-queries :: error ", error);
        }
    } //queries can be given multiple in [] and in appwrite have to make indexes in article 



    //file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error ", error);
            return false
        }
    }

    async deleteFile(file_ID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                file_ID
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error ", error);            
            return false;
        }
    }

    getFilePreview(file_ID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            file_ID
        )
    }
}

const service = new Service()
export default service