import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

class Service {
    client = new Client;
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwritedatabasetId,
                conf.appwritecollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }
    async updatePost(slug, { title, slug, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabasetId,
                conf.appwritecollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwritedatabasetId,
                conf.appwritecollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwritedatabasetId,
                conf.appwritecollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
            return false;
        }
    }
    async getPost(quries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabasetId,
                conf.appwritecollectionId,
                quries,
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
            return false;
        }
    }
    // file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwritebucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwritebucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deketePost :: error", error);
            return false;
        }
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwritebucketId,
            fileId
        )
    }
}

const service = new Service
export default service;