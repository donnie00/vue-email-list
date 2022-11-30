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
		fetchMails() {
			this.fetchedMail = [];

			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((mail) => {
					this.fetchedMail.push(mail.data.response);

					if (this.fetchedMail.length === 10) {
						this.mailList = this.fetchedMail;
					}
				});
		},

		printMails() {
			for (let i = 0; i < 10; i++) {
				this.fetchMails();
			}
		},

		copyMail(text) {
			navigator.clipboard.writeText(text);
		},
	},

	mounted() {
		this.printMails();
	},
}).mount('#app');
