
const getTopic = async (userId) => {

    let vkTopic;

    const url = `https://physical-transformation.online/api/v1/member/topic/`;

    const reqOptions = {
        "userId": userId
    }

    const options = {
        method: "POST",
        body: JSON.stringify(reqOptions),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        mode: 'cors',
    }

    await fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            vkTopic = data.result;
        })
        .catch((error) => console.log(error));
    
    return vkTopic;
}

export default getTopic;