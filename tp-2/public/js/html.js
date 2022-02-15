function bindAddButton(button){
	button.onclick = function(event){
		event.preventDefault();
    	let title = document.querySelector('input[name="titleToAdd"]');
    	let desc = document.querySelector('textarea[name="descToAdd"]');

        try{
            new Article(Article.count()+1,title.value, desc.value).show();
            title.value = '';
            desc.value = '';
        }catch (e){
            let form = document.querySelector('#addNewsForm');

            // Faire un type 'ArticleError' et 'TitleError' puis préciser le pb dans le message aurait été plus propre, mais pas sujet du tp.
            if(e instanceof TitleEmptyError){
                addError("Titre vide", form);
            }else if(e instanceof TitleTooShortError){
                addError("Titre trop court", form);
            }else if(e instanceof ArticleExistsError){
                addError("Article déja existant", form);
            }else if(e instanceof DescEmptyError){
                addError("Description vide", form);
            }else{
                addError("Erreur inconnue", form);
            }
        }
		return false;
	}
}

function bindDetailsButton(buttons){
    buttons.forEach( (button) => {
            button.onclick = function (event) {
                event.preventDefault();
                logMessageWithDate(button.parentNode.querySelector('p').innerText)
                return false;
            }
        }
    )
}

function clearErrors(){
	let errors = document.querySelectorAll('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }
}

function addError(message, parent){
	let error = document.createElement('p');
    error.innerHTML = message;
    error.style.color = ROUGE;
    error.classList.add('error');

    parent.prepend(error);
}