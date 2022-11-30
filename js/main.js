const {createApp} = Vue;

createApp({
	//Inserisci qui i dati
	data() {
		return {
			mailList: [],
			fetchedMail: [],
		};
	},
	//inserisci qui le tue funzioni
	methods: {
		fetchMail() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((mail) => {
					this.fetchedMail.push(mail.data.response);
					console.log(this.fetchedMail.length);
					console.log(this.mailList);

					if (this.fetchedMail.length === 10) {
						this.mailList = this.fetchedMail;
					}
				});
		},
	},

	mounted() {
		for (let i = 0; i < 10; i++) {
			this.fetchMail();
		}
	},
}).mount('#app');
