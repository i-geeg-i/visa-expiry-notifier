import type { User } from "../sheets/user";

export const expiringVisaMessage = `Your *visa* is about to expire soon\\. Please bring the following documents to 319 office as soon as possible to prolong it:
\\- Passport \\(original\\)
\\- Copy of all nonempty pages of your passport
\\- The payment receipt for the visa prolongation
\\- One 3x4 cm photo
\\- The current registration card and a copy of it
\\- The current migration card and a copy of it

Failure to provide the documents on time can result in deportation\\!

P\\.S\\.: This is an automated message\\. Do not reply to this message\\. If you already brought the documents, you can ignore this message\\.`;

export const expiringRegistrationMessage = `Your *registration card* is about to expire soon\\. Please send the following documents to the bot \\(or bring them to 319 office\\) as soon as possible to prolong it: 
\\- Copy of all pages of your passport \\(including empty ones\\) 
\\- The current registration card and a copy of it
\\- The migration card 

Failure to provide the documents on time can result in paying a fine and being interrogated by the migration services\\. Two strikes in one year will result in deportation\\!

P\\.S\\.: This is an automated message\\. Do not reply to this message\\. If you already brought the documents, you can ignore this message\\.`;

export const expiringMedicalMessage = `Your *medical exam results* are about to expire soon\\. We remind you that, according to the Federal Law \\№ 375 from 14\\.07\\.2022, every foreign citizen must take an obligatory medical exam once a year\\. It can be also taken before the current one expires or up to a month after the day of expiration\\. 

When you get the results, send them to the bot, please\\. A copy of results are submitted in Verkhniy Uslon \\(the UFMS\\) by the migration specialist\\.

❗️Failure to take the medical check up and provide the documents on time can result in paying a fine and being interrogated by the migration services\\. 

P\\.S\\.\\: This is an automated message\\. Do not reply to this message\\. If you already brought the documents, you can ignore this message\\.`;

export const signTheJournalMessage = `Dear student,

We kindly remind you to come to 319 to sign the journal to confirm your acquaintance with the Migration law of the Russian Federation (https://t.me/internationaliu/312) as soon as possible\\. 
In case of ignoring this request we will imply disciplinary note \\(according to the section 4\\.3\\.28 of the rules of the internal regulations of ANO HE \\"Innopolis University\\"\\)\\.

If you have already signed the journal, please, remind your fellow international students to do it\\.
If you are abroad you can sign the journal upon your arrival to Russia\\.

Best regards,
Student Affairs Office`; //Text for notification before holidays, should be sent once to all international students

export const locationOnTheHolidaysMessage = `Dear student,

Student Affairs Office wishes you all the best in the upcoming New Year\\!

In connection with the winter holidays, we would like you to inform us about your plans on staying in Russia or leaving the country\\. Please, fill in the Travelling form on My University or send a text message on bot mentioning approximate dates of your departure and arrival\\.

Thank you very much\\!

Best regards,
Student Affairs Office`; //Text for notification before holidays, should be sent once to all international students

export const actualizeRegistrationMessage = `Dear student,

We would like to remind you to renew your registration in case you have traveled abroad or stayed in a hotel\\/other places, or your current registration is about to expire\\.

For that you need to submit documents to 319 no later than 4 days since you have checked out of the previous place of registration or arrived in Russia\\.

The documents that you need\\:
\\- the copies of ALL the pages of your passport \\(including empty pages\\)
\\- a copy of your migration card
\\- the original of the registration if you stayed somewhere else\\. 

Thank you for taking care of your documents\\!

Best regards,
Student Affairs Office`; //TODO: Add actual message before deploy

function escapeSpecialChars(text: string) {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}

export function katyaNotification(user: User, documentType: string) {
  let studentName = user.name;
  // Usernames can have underscores, which are interpreted as Markdown formatting
  if (user.telegram !== "") studentName += ` (@${user.telegram})`;
  studentName = escapeSpecialChars(studentName);
  return `The student ${studentName} could not be reached about their expiring *${documentType}*\\.`;
}
