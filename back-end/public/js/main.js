const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePost)
})

async function deletePost(){
    const postId = this.parentNode.dataset.id
    try{
        const response = await fetch('profile/deletePost', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'postIdFromJSFile': postId
            })
        })
        // Error occurs on next line
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
        console.log("2")
    }
}
