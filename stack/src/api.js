import axios from "axios";
const url = "/api/post";

export default class API {
    // get all the  post from the server
    static async getAllPost() {
        const res = await axios.get(url);
        return res.data;
    }
    // get all the  post from the server
    static async getPostByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    // get insert post in the database
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data;
    }
    // get update post into the database
    static async updatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    // to delete a post
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}