import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const GetObrasList = async (page) => {
	if (page === 1) {
		let resp = await axios.get(`${BASE_URL}/obras`);
		return resp.data
	} else {
		let resp = await axios.get(`${BASE_URL}/obras/?page=${page}`);
		return resp.data
	}
	
};

export const GetObrasId = async (id) => {
	const resp = await axios.get(`${BASE_URL}/obras/obra/${id}`);
	return resp.data;
}

export const sendEmail = async ({fullName, email, subject, message, setSend}) => {

	try {
		const datas = {fullName, email, subject, message};
		let res = await axios.post(`${BASE_URL}/send_email`, datas);
		if (res) {
			setSend(res.data)
		}         
	} catch (error) {
		alert(error.response.data.message)
	}
	
}