// Function to add a new email row to the DOM
// mailData object contains all properties: sender, subject, description, date, isRead, isStarred, isImportant, content, type, category
function addEmailRow(mailData) {
    const emailRow = document.createElement('div');
    emailRow.classList.add('emailRow');
    if (mailData.isRead) {
        emailRow.classList.add('emailRow--read'); // Apply 'read' styling if true
    }

    // Determine star icon based on isStarred flag
    const starIcon = mailData.isStarred ? 'star' : 'star_border';

    // Get the dynamically generated display time
    const emailDisplayTime = getDisplayTime(mailData.date);

    emailRow.innerHTML = `
        <div class="emailRow__options">
            <input type="checkbox">
            <span class="material-icons">${starIcon}</span>
            <span class="material-icons">${mailData.isImportant ? 'label_important' : ''}</span>
        </div>
        <h3 class="emailRow__title">${mailData.sender}</h3>
        <div class="emailRow__message">
            <h4>${mailData.subject}
                <span class="emailRow__description">
                    - ${mailData.description}
                </span>
            </h4>
        </div>
        <p class="emailRow__time">${emailDisplayTime}</p>`;

    // Add click event listener to the email row to open detailed view
    emailRow.addEventListener('click', () => {
        openEmailDetail(mailData); // Pass the entire mail data object
    });

    return emailRow; // Return the created HTML element
}

// --- Email Data Array ---
// 'date' format: "YYYY-MM-DD HH:MM" for full precision sorting.
// 'type' is: 'inbox', 'sent', 'starred', 'snoozed', 'drafts'
// 'category': 'primary', 'promotions', 'social', 'updates' - used for dynamic section counts
// 'content' holds the full email body (can include HTML tags).
// 'isRead', 'isStarred', 'isImportant' are flags for styling/icon display.

const emailData = [
    // NEW EMAILS (Most Recent First)
    // --- Added emails for 05-08-2025 ---
    { sender: 'Flipkart HR', subject: 'Re: Leave Request: Chicken Pox', description: 'Your leave request is under review. Complete the AngularJS task by Aug 15 for approval.', date: '2025-08-05 10:00', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>We have received your leave request and are sorry to hear about your condition. We wish you a speedy recovery.</p>
        <p>Regarding your request for a 4-day leave, we can approve this on the condition that you complete your first assigned task before your joining date.</p>
        <p><strong>Your first task is to learn AngularJS.</strong> You must be proficient in it by <strong>August 15, 2025</strong>. If you can demonstrate your readiness with AngularJS, your 4-day leave will be approved.</p>
        <p>We understand your situation is serious and we are trying to provide the best possible support. We trust that you will use this time to rest and recover, while also preparing for your role.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Flipkart HR Team</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    { sender: 'Nishit Baleja', subject: 'Leave Request: Chicken Pox', description: 'Requesting 4-day sick leave due to severe chicken pox.', date: '2025-08-05 09:30', isRead: true, type: 'sent', category: 'primary',
        content: `
        <p>Dear Flipkart HR Team,</p>
        <p>I am writing to request a 4-day sick leave, from August 5 to August 8, 2025. I have been diagnosed with a severe case of chicken pox and my condition is serious. I will be unable to work during this period.</p>
        <p>I hope you can consider my situation and approve my leave. I will keep you updated on my health and return to work as soon as I am well enough.</p>
        <p style="color: #500050;">Sincerely,</p>
        <p style="color: #500050;">Nishit Baleja</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // --- Updated emails with date 2025-07-30 ---
    { sender: 'Google Pay', subject: 'Payment Received: Online Purchase', description: 'Your payment for your recent online purchase has been successfully processed.', date: '2025-07-30 12:50', isRead: false, type: 'inbox', category: 'updates',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>Your payment of <strong>₹599.00</strong> for your recent online purchase has been successfully processed.</p>
        <p>Thank you for using Google Pay. Your transaction details are available in your app.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Google Pay Team</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    { sender: 'Nishit Baleja', subject: 'Follow-up: Front-End Developer Interview - Innovate Solutions (July 11, 2025)', description: 'I joined the meeting at 12 PM yesterday, but no one from your team joined. Inquiring about rescheduling.', date: '2025-07-30 12:07', isRead: true, type: 'sent', category: 'primary',
        content: `
        <p>Dear Innovate Solutions Recruitment Team,</p>
        <p>I am writing to follow up on the Front-End Developer interview that was scheduled for <strong>July 11, 2025, at 12:00 PM (IST)</strong>.</p>
        <p>I joined the Google Meet link promptly at the scheduled time and waited for approximately 15 minutes, but unfortunately, no one from your team joined the meeting.</p>
        <p>Could you please let me know if there was any technical issue or if the interview needs to be rescheduled? I am very interested in this opportunity and would appreciate the chance to connect with your team.</p>
        <p>Please advise on the next steps or if a new time can be arranged.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Nishit Baleja</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    { sender: 'Slack', subject: 'Welcome to Flipkart Engineering Workspace!', description: 'You\'ve been invited to join the Flipkart Engineering workspace. Get started now!', date: '2025-07-30 12:00', isRead: false, type: 'inbox', category: 'social',
        content: `
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_256.png" alt="Slack Logo" style="width: 60px; height: 60px;">
        </div>
        <h2 style="text-align: center; margin-bottom: 20px; color: #363636;">You've been invited to join Flipkart Engineering on Slack!</h2>
        <p style="margin-bottom: 16px; color: #5f6368; text-align: center;">Join your team on Slack to start collaborating, share files, and get work done.</p>
        <div style="text-align: center; margin-bottom: 30px;">
            <a href="#" style="background-color: #4A154B; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 500;">Join now</a>
        </div>
        <p style="font-size: 12px; color: #757575; text-align: center;">
            If you have any questions, please contact your workspace admin.
        </p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin-top: 30px; margin-bottom: 20px;">
        <p style="font-size: 12px; color: #757575; text-align: center;">
            Slack Technologies, LLC, a Salesforce company.
        </p>
        `
    },
    { sender: 'Flipkart HR', subject: 'Calendar Invite: Flipkart Front-End Developer Internship Onboarding', description: 'Mandatory orientation for all new interns on August 1, 2025, at 9:30 AM IST.', date: '2025-07-30 10:00', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>This is a calendar invitation for your upcoming onboarding session for the <strong>Front-End Developer Internship Program</strong> at Flipkart.</p>
        <p><strong>Event Details:</strong></p>
        <ul>
            <li><strong>Title:</strong> Flipkart Front-End Developer Internship Onboarding</li>
            <li><strong>Date:</strong> Friday, August 1, 2025</li>
            <li><strong>Time:</strong> 09:30 AM - 10:30 AM IST</li>
            <li><strong>Location:</strong> Google Meet (Link will be shared closer to the date)</li>
            <li><strong>Description:</strong> Welcome and initial orientation for new Front-End Developer interns. We will cover key information, introduce your team and senior mentor, and discuss daily stand-up meeting protocols.</li>
        </ul>
        <p>Please accept this invitation to confirm your attendance. We are excited to have you join our team!</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Flipkart HR Team</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    { sender: 'News Daily', subject: 'Your Morning News Digest', description: 'Top headlines and updates from around the world.', date: '2025-07-30 08:00', isRead: true, type: 'inbox', category: 'updates',
        content: `
        <p>Dear Reader,</p>
        <p>Here's your daily dose of news and updates from various sectors.</p>
        <p>Stay informed with the latest trends in technology, business, and current affairs.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">News Daily Team</p>
        `
    },
    // EMAILS FROM YESTERDAY (July 29, 2025)
    { sender: 'LinkedIn', subject: 'New Job Alert: React Developer roles in Bangalore', description: 'See the latest opportunities for React Developers in your area.', date: '2025-07-29 08:00', isRead: false, type: 'inbox', category: 'social',
        content: `
        <p>Hi Nishit,</p>
        <p>Good news! We've found new job openings for <strong>React Developers</strong> in Bangalore that match your skills and preferences.</p>
        <p>Explore these roles and apply today to take the next step in your career.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">The LinkedIn Team</p>
        `
    },
    { sender: 'Google Drive', subject: 'Project Plan 2025-2026 shared with you', description: 'John Doe has shared a document with you: Project Plan 2025-2026.pdf', date: '2025-07-29 09:30', isRead: false, type: 'inbox', category: 'updates',
        content: `
        <p>Hi Nishit,</p>
        <p>John Doe has shared a document with you on Google Drive:</p>
        <div style="background-color: #f8f8f8; padding: 15px; border-left: 3px solid #4285F4; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">Project Plan 2025-2026.pdf</p>
            <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #5f6368;">View, comment, or download this document.</p>
            <a href="#" style="color: #1a73e8; text-decoration: none; font-size: 0.9em;">Open in Drive</a>
        </div>
        <p>You can access it directly from your Google Drive.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Google Drive Team</p>
        `
    },
    { sender: 'Fitness App', subject: 'Your Daily Workout Reminder', description: 'Time to get active! Log your workout for today.', date: '2025-07-29 07:00', isRead: true, type: 'inbox', category: 'promotions',
        content: `
        <p>Hi Nishit,</p>
        <p>It's time for your daily workout! Stay active and healthy. Log your progress in the app.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Fitness App Team</p>
        `
    },
    { sender: 'Eventbrite', subject: 'You\'re Invited: Tech Meetup August 2025', description: 'Join us for our monthly tech meetup focusing on AI and Machine Learning.', date: '2025-07-29 09:00', isRead: false, type: 'inbox', category: 'social',
        content: `
        <p>Dear Nishit,</p>
        <p>You are invited to our upcoming monthly Tech Meetup. This month's topic is <strong>AI and Machine Learning advancements</strong>.</p>
        <p><strong>Date:</strong> August 15, 2025</p>
        <p><strong>Time:</strong> 6:00 PM - 8:00 PM IST</p>
        <p><strong>Location:</strong> Online (Link to be provided upon RSVP)</p>
        <p>Don't miss this opportunity to network with industry experts and learn about the latest trends.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Eventbrite Team</p>
        `
    },
    // Flipkart Internship Details (Mon: July 28, 2025, 10:00 AM)
    { sender: 'Flipkart Careers', subject: 'Important: Your Front-End Developer Internship Details', description: 'Your internship starts Aug 1, seniors assigned, daily Slack stand-ups, flexible hours.', date: '2025-07-28 10:00', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>We are excited to share important details regarding your upcoming <strong>Front-End Developer Internship</strong> at Flipkart!</p>
        <p>Your internship is confirmed to begin on <strong>Friday, August 1, 2025</strong>.</p>
        <p>Here are some key points for your reference:</p>
        <ul>
            <li><strong>Senior Allocation:</strong> Your senior mentor will be assigned and introduced to you on <strong>August 1, 2025</strong>. They will guide you throughout your internship.</li>
            <li><strong>Daily Stand-up Meetings:</strong> During your internship, daily stand-up meetings will be conducted on <strong>Slack</strong>. These meetings are crucial for daily updates and team coordination.</li>
            <li><strong>Slack Onboarding:</strong> You will be officially invited and joined to our Slack workspace on <strong>August 1, 2025</strong>. Please keep an eye on your email for the invitation link.</li>
            <li><strong>Flexible Timings:</strong> We offer flexible working hours for our interns. You are required to complete <strong>9 hours of work daily</strong>. You can join anytime between <strong>9:00 AM and 9:00 PM (IST)</strong>. However, your specific daily timing will need to align with your assigned senior's schedule to ensure effective collaboration.</li>
        </ul>
        <p>We look forward to welcoming you to the team and a productive internship experience!</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Flipkart Recruitment Team<br>Flipkart Internet Private Limited</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Online Course Discount (Sunday: July 27, 2025, 11:00 AM)
    { sender: 'Udemy', subject: 'Flash Sale: 80% Off on Web Development Courses!', description: 'Limited time offer! Master React, Node.js, and more with huge discounts.', date: '2025-07-27 11:00', isRead: false, type: 'inbox', category: 'promotions',
        content: `
        <p>Hi Nishit,</p>
        <p>Don't miss out on our incredible flash sale! Get <strong>80% off</strong> on all our top-rated web development courses.</p>
        <p>Whether you want to master React, dive into Node.js, or explore advanced JavaScript, now is the perfect time to upskill.</p>
        <p style="text-align: center; margin: 20px 0;">
            <a href="#" style="background-color: #A435F0; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: 500;">Browse Courses</a>
        </p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">The Udemy Team</p>
        `
    },
    // Innovate Solutions Offer (July 12, 2025, 12:40 PM)
    { sender: 'Innovate Solutions', subject: 'Interview Feedback: Front-End Developer Role', description: 'Your interview went well, but our budget is 400,000 INR. Let us know if you are interested.', date: '2025-07-12 12:40', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>Thank you for attending the interview for the Front-End Developer position. We appreciate you taking the time to speak with our team.</p>
        <p>Your interview went well, and we were impressed with your technical skills and approach to problem-solving.</p>
        <p>Regarding compensation, our current budget for this role is <strong>400,000 INR per annum</strong>. We understand that this might differ from your expectations.</p>
        <p>If this compensation range is acceptable to you, and you are still interested in proceeding with Innovate Solutions, please let us know. We would be happy to discuss the opportunity further.</p>
        <p>We look forward to your response.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Innovate Solutions Recruitment Team</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Innovate Solutions Reply (July 12, 2025, 12:16 PM)
    { sender: 'Innovate Solutions', subject: 'Re: Follow-up: Front-End Developer Interview - Innovate Solutions (July 11, 2025)', description: 'Thank you for your follow-up. Please await contact from our HR team soon.', date: '2025-07-12 12:16', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>Thank you for reaching out regarding your interview scheduled for July 11, 2025.</p>
        <p>We apologize for any inconvenience caused by the previous no-show. Our HR team is currently managing a high volume of interviews and we appreciate your patience.</p>
        <p>Please bear with us. Our HR team will be in contact with you very soon to reschedule your technical interview. We are committed to ensuring a smooth process for all our candidates.</p>
        <p>Thank you for your understanding and continued interest in Innovate Solutions.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Innovate Solutions Recruitment Team</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Your Follow-up to Innovate Solutions (July 12, 2025, 12:07 PM)
    { sender: 'Nishit Baleja', subject: 'Follow-up: Front-End Developer Interview - Innovate Solutions (July 11, 2025)', description: 'I joined the meeting at 12 PM yesterday, but no one from your team joined. Inquiring about rescheduling.', date: '2025-07-12 12:07', isRead: true, type: 'sent', category: 'primary',
        content: `
        <p>Dear Innovate Solutions Recruitment Team,</p>
        <p>I am writing to follow up on the Front-End Developer interview that was scheduled for <strong>July 11, 2025, at 12:00 PM (IST)</strong>.</p>
        <p>I joined the Google Meet link promptly at the scheduled time and waited for approximately 15 minutes, but unfortunately, no one from your team joined the meeting.</p>
        <p>Could you please let me know if there was any technical issue or if the interview needs to be rescheduled? I am very interested in this opportunity and would appreciate the chance to connect with your team.</p>
        <p>Please advise on the next steps or if a new time can be arranged.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Nishit Baleja</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Innovate Solutions Interview (July 11, 2025, 10:00 AM)
    { sender: 'Innovate Solutions', subject: 'Interview Invitation: Front-End Developer Role', description: 'Your application for Front-End Developer role reviewed. Join meeting at 12:00 PM today for interview.', date: '2025-07-11 10:00', isRead: true, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>We are pleased to inform you that your application for the <strong>Front-End Developer</strong> position has been reviewed. Your profile, submitted via LinkedIn on July 7, 2025, aligns well with our requirements.</p>
        <p>We would like to invite you for an interview today, <strong>July 11, 2025, at 12:00 PM (IST)</strong>.</p>
        <p style="text-align: center; margin: 20px 0;">
            <a href="https://meet.google.com/innovate-solutions-interview-link" style="background-color: #4285F4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: 500;">Join Google Meet</a>
        </p>
        <p>We look forward to speaking with you.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Innovate Solutions Recruitment Team</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Amazon Documents Verified (July 8, 2025, 10:50 PM)
    { sender: 'Amazon Recruitment', subject: 'Update: Your Documents have been Verified', description: 'Congratulations! Your submitted documents for Front-End Developer role have been successfully verified.', date: '2025-07-08 22:50', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>We are pleased to inform you that your documents submitted for the <strong>Front-End Developer</strong> role have been successfully verified.</p>
        <p>This completes an important step in your application process with Amazon.</p>
        <p>Further information regarding the next stages of your application, including any assessments or interviews, will be communicated to you via email in due course. Please continue to monitor your inbox for updates.</p>
        <p>We appreciate your interest in Amazon and wish you the very best!</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Amazon Recruitment Team<br>Amazon India</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Luxoft Resume Received (July 9, 2025, 11:23 AM)
    { sender: 'Luxoft HR', subject: 'Your Application: Front-End Developer - Resume Received', description: 'Thank you for your application. We are impressed by your profile. HR team will contact you soon. Visa sponsorship is not provided.', date: '2025-07-09 11:23', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>Thank you for your application for the Front-End Developer position in Basel, Switzerland, and for sharing your resume and supporting documents.</p>
        <p>We have reviewed your profile and work experience, and are genuinely impressed with your qualifications in <strong>Front-End Development and UI/UX Design</strong>.</p>
        <p>Our HR team will be in contact with you shortly to discuss your application further and outline the next steps in our recruitment process.</p>
        <p>Please note: We currently <strong>do not provide visa sponsorship</strong> for this position. Candidates are required to manage their own visa process to work in Switzerland.</p>
        <p>If you are able to arrange your own visa process, we would certainly be interested in proceeding further with your application. Please communicate your understanding and ability regarding this matter when our HR team contacts you.</p>
        <p>We look forward to potentially collaborating with you.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Luxoft HR Team<br>Luxoft S.A.</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Your Reply to Luxoft HR (July 9, 2025, 11:15 AM)
    { sender: 'Nishit Baleja', subject: 'Re: Your Application: Front-End Developer - Resume Received (Visa Clarification)', description: 'I can manage my own visa process; would appreciate Luxoft\'s support with government approvals.', date: '2025-07-09 11:15', isRead: true, type: 'sent', category: 'primary',
        content: `
        <p>Dear Luxoft HR Team,</p>
        <p>Thank a you for your recent email regarding my application for the Front-End Developer position and for the clarification on visa sponsorship.</p>
        <p>I confirm my understanding that visa sponsorship is not provided for this role. I am fully prepared and able to <strong>manage my own visa application process</strong> to secure the necessary work permits for Switzerland.</p>
        <p>I would, however, appreciate Luxoft's support in obtaining any required government approvals or documentation that typically fall under employer responsibility during such a process.</p>
        <p>I am very enthusiastic about the opportunity to contribute to Luxoft, and I am confident that my skills and experience would be a valuable asset to your team in Basel.</p>
        <p>Thank you again for your consideration.</p>
        <p style="color: #500050;">Sincerely,</p>
        <p style="color: #500050;">Nishit Baleja</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // IBM Interview (July 7, 2025, 09:00 AM)
    { sender: 'IBM Careers', subject: 'Interview Update: Technical Round Scheduled for Today', description: 'Your documents are verified, HR round completed. Technical round scheduled for 1 PM today.', date: '2025-07-07 09:00', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>We are pleased to inform you that all your submitted documents have been successfully verified.</p>
        <p>Your first interview round with the HR team has also been successfully completed.</p>
        <p>Your next, and crucial, <strong>Technical Round</strong> has been scheduled for <strong>Monday, July 7, 2025, at 1:00 PM (IST)</strong>.</p>
        <p style="text-align: center; margin: 20px 0;">
            <a href="https://meet.google.com/ibm-technical-interview-link-12345" style="background-color: #007BFF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: 500;">Join Google Meet</a>
        </p>
        <p>We wish you the very best for your upcoming technical interview!</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">IBM Recruitment Team<br>IBM India Private Limited</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Internship Selection based on Performance (July 6, 2025)
    { sender: 'Flipkart Careers', subject: 'Congratulations! Internship Selection Offer - Front-End Developer', description: 'Exciting news, Nishit! You have been selected for the 6-month Front-End Developer internship program.', date: '2025-07-06 10:00', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>We are thrilled to inform you that based on your strong performance in the recent assessments and your overall profile, you have been selected for our <strong>6-month Front-End Developer Internship Program</strong> at Flipkart!</p>
        <p>Your dedication and skills have truly impressed us, and we are excited to offer you this opportunity to grow with our team.</p>
        <p>During this internship, you will be working directly under the guidance of our experienced senior developers on <strong>live projects</strong>, gaining invaluable hands-on experience with cutting-edge technologies.</p>
        <p>To ensure your continuous growth and evaluation, structured assessments will be conducted every <strong>15 days</strong> throughout your internship period.</p>
        <p>As mentioned previously, this internship provides a direct pathway to a full-time role. Your performance during these 6 months will be critically evaluated. Our goal is to identify and offer <strong>on-site full-time Front-End Developer positions</strong> to the <strong>top 3 performers</strong> from the internship batch, as we currently have limited seating capacity in our Bangalore office for these roles. We encourage you to give your best to secure one of these coveted positions.</p>
        <p>The exact <strong>internship joining date will be communicated to you via a separate email</strong> shortly. Please keep an eye on your inbox for this crucial information.</p>
        <p>We look forward to welcoming you to the Flipkart team!</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Flipkart Recruitment Team<br>Flipkart Internet Private Limited</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Existing Email - Problem Solving & Logical Reasoning
    { sender: 'Flipkart Careers', subject: 'Action Required: Final Assessment for Internship Selection - Problem Solving & Logical Reasoning', description: 'Your final assessment for Front-End Developer internship: Problem Solving & Logical Reasoning round details.', date: '2025-07-06 01:05', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>Congratulations once again on reaching this advanced stage of our selection process for the Front-End Developer internship program at Flipkart.</p>
        <p>We are now at the <strong>fifth and final assessment round</strong>: <strong>Problem Solving & Logical Reasoning (PSLR)</strong>. This round is crucial for determining your eligibility for the internship.</p>
        <p>Successfully clearing this assessment will lead to your selection for our <strong>6-month internship program</strong>.</p>
        <p>This internship offers flexibility: you can choose to join us <strong>on-site at our Bangalore location</strong>, providing an immersive experience within our dynamic teams, or opt for a <strong>Work From Home (WFH) arrangement</strong>, allowing you to contribute remotely.</p>
        <p>During your internship, the primary focus will be on strengthening your skills in cutting-edge technologies, particularly <strong>Node.js and React.js</strong>, which are integral to our development ecosystem. You will be working on live projects under the guidance of our senior developers.</p>
        <p>Please note that the internship period will also include a series of continuous assessments and evaluations to monitor your progress and performance. This structured approach is designed to further refine your capabilities.</p>
        <p>Our ultimate objective is to identify and onboard the top <strong>3 performers</strong> from the current pool of successful interns for full-time, on-site Front-End Developer positions. These 3 individuals will be offered permanent roles based on their outstanding performance throughout the internship and subsequent evaluations. The remaining successful interns will complete their 6-month program as interns only, as we currently have seating capacity for only 3 full-time Front-End positions on-site in Bangalore.</p>
        <p>Details for the Problem Solving & Logical Reasoning assessment will be sent in a separate communication shortly. We highly recommend thorough preparation.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Flipkart Recruitment Team<br>Flipkart Internet Private Limited</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Other July 6th emails (Sunday)
    { sender: 'Google Maps', subject: 'Your July 2025 Local Guide Summary', description: 'See your contributions for the past month and unlock new perks!', date: '2025-07-06 09:15', isRead: false, type: 'inbox', category: 'updates',
        content: '<p>Hi Nishit,</p><p>Check out your amazing contributions as a Local Guide in July! You added new places, reviewed restaurants, and helped countless people. See your impact and discover new rewards waiting for you.</p>' },
    { sender: 'Spotify', subject: 'Your Weekly Mix is Ready!', description: 'New music tailored just for you. Listen now and discover your next favorite track.', date: '2025-07-06 08:00', isRead: true, type: 'inbox', category: 'social',
        content: '<p>Hey Nishit,</p><p>Your personalized Weekly Mix has been updated! Dive into new recommendations based on your listening habits. Enjoy fresh tracks and old favorites.</p>' },

    // Amazon Referral (Monday: July 7, 2025, 12:00 PM)
    { sender: 'Amazon Recruitment', subject: 'Referral & Document Verification: Front-End Developer Role', description: 'Your friend Radhika Joshi referred you. We are impressed by your profile and work. Document verification on Monday, July 7, 12:30 PM.', date: '2025-07-07 12:00', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>We are reaching out to you as your profile was referred to us by your friend, <strong>Radhika Joshi</strong>. We have reviewed your profile and portfolio, and are highly impressed with your work as a <strong>Front-End Developer</strong>.</p>
        <p>To proceed with your application, we would like to schedule a <strong>Document Verification session on Monday, July 7, 2025, at 12:30 PM (IST)</strong>.</p>
        <p style="text-align: center; margin: 20px 0;">
            <a href="https://meet.google.com/amazon-doc-verify-link-12345" style="background-color: #FF9900; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: 500;">Join Google Meet</a>
        </p>
        <p>Kindly ensure all your original documents (ID proof, educational certificates, work experience letters, etc.) are available for verification during the session. A detailed list of required documents will be shared in a separate email.</p>
        <p>We look forward to connecting with you.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Amazon Recruitment Team<br>Amazon India</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // YESTERDAY (July 5, 2025, Saturday)
    { sender: 'Flipkart Careers', subject: 'Congratulations! DSA Round Cleared - Next Steps', description: 'Great news, Nishit! You have successfully cleared your DSA Round. Now 20 candidates remaining.', date: '2025-07-05 11:30', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>We are delighted to inform you that you have successfully cleared the Data Structures & Algorithms (DSA) assessment for the Front-End Developer position at Flipkart!</p>
        <p>This was a critical round, and your performance truly stood out. Congratulations on this significant achievement!</p>
        <p>With this round concluded, we now have a highly competitive pool of 20 candidates remaining who have demonstrated exceptional skills.</p>
        <p>We will be evaluating the next steps and will communicate the details for the subsequent rounds (if any, or direct final interviews) very soon via email and our official WhatsApp group. Please continue to monitor both for timely updates.</p>
        <p>We appreciate your continued dedication and look forward to potentially welcoming you to the Flipkart team.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Flipkart Recruitment Team<br>Flipkart Internet Private Limited</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    { sender: 'Swiggy', subject: 'Craving something delicious? 🍕 Get 50% off!', description: 'Exclusive offer just for you! Order now and satisfy your hunger.', date: '2025-07-05 18:00', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Hi Nishit,</p><p>Don\'t miss out on this limited-time offer! Get 50% off your next Swiggy order. Use code FOODIE50 at checkout.</p>' },
    { sender: 'Zomato', subject: 'Your recent review has been published!', description: 'Thanks for sharing your experience at [Restaurant Name]. Your review is now live!', date: '2025-07-05 10:00', isRead: true, type: 'inbox', category: 'social',
        content: '<p>Dear Nishit,</p><p>Thank you for submitting your review for [Restaurant Name]. It has been published and is now visible to other users. We appreciate your feedback!</p>' },

    // Luxoft Sent Mail (Sunday: July 6, 2025, 10:00 AM)
    { sender: 'Nishit Baleja', subject: 'Job Application: Front-End Developer - Nishit Baleja (Job ID: LXFT-2025-FE-001)', description: 'Application for Front-End Developer role in Basel, Switzerland, with resume and documents attached.', date: '2025-07-06 10:00', isRead: true, type: 'sent', category: 'primary',
        content: `
        <p>Dear Hiring Team at Luxoft,</p>
        <p>I am writing to express my keen interest in the Front-End Developer position in Basel, Switzerland. My name is <strong>Nishit J Baleja</strong>, and I bring over <strong>2+ years of hands-on experience</strong> in front-end development.</p>
        <p>My core skills include:</p>
        <ul>
            <li><strong>HTML</strong>, <strong>CSS</strong></li>
            <li><strong>JavaScript</strong>, <strong>React.js</strong></li>
            <li><strong>Next.js</strong></li>
            <li><strong>GSAP</strong> (GreenSock Animation Platform)</li>
            <li><strong>Three.js</strong>, <strong>WebGL</strong> (for 3D web graphics)</li>
            <li><strong>Locomotive.js</strong> (for smooth scrolling)</li>
        </ul>
        <p>In addition to my development expertise, I also possess strong skills as a <strong>UI/UX Designer</strong>, allowing me to bridge the gap between design and implementation effectively.</p>
        <p>My resume and supporting documents, which further detail my projects and experience, are attached for your review. Please find them below:</p>
        <div class="email-attachment-block">
            <span class="material-icons">attach_file</span>
            <a href="javascript:void(0);" onclick="alert('Simulated download for Nishit_Baleja_Resume.pdf'); return false;">Nishit_Baleja_Resume.pdf</a>
            <span class="material-icons download-icon">download</span>
        </div>
        <p>I am confident that my technical proficiency and design sensibilities align well with the requirements of this role.</p>
        <p>Thank you for considering my application. I look forward to the opportunity to discuss how my skills can contribute to Luxoft.</p>
        <p style="color: #500050;">Sincerely,</p>
        <p style="color: #500050;">Nishit J Baleja</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Other July 6th emails (Sunday)
    { sender: 'Google Maps', subject: 'Your July 2025 Local Guide Summary', description: 'See your contributions for the past month and unlock new perks!', date: '2025-07-06 09:15', isRead: false, type: 'inbox', category: 'updates',
        content: '<p>Hi Nishit,</p><p>Check out your amazing contributions as a Local Guide in July! You added new places, reviewed restaurants, and helped countless people. See your impact and discover new rewards waiting for you.</p>' },
    { sender: 'Spotify', subject: 'Your Weekly Mix is Ready!', description: 'New music tailored just for you. Listen now and discover your next favorite track.', date: '2025-07-06 08:00', isRead: true, type: 'inbox', category: 'social',
        content: '<p>Hey Nishit,</p><p>Your personalized Weekly Mix has been updated! Dive into new recommendations based on your listening habits. Enjoy fresh tracks and old favorites.</p>' },

    // WITHIN LAST 7 DAYS (e.g., July 3, 2025, Thursday and older within the week)
    { sender: 'Flipkart Careers', subject: 'Reminder: Your DSA Technical Round is Today!', description: 'Your DSA technical interview is scheduled for today at 2:00 PM IST. Join the Google Meet link.', date: '2025-07-03 14:00', isRead: true, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>This is a friendly reminder that your Data Structures & Algorithms (DSA) Technical Round for the Front-End Developer position is scheduled for today, July 3, 2025, at 2:00 PM IST.</p>
        <p style="text-align: center; margin: 20px 0;">
            <a href="https://meet.google.com/fake-dsa-interview-link-12345" style="background-color: #007BFF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: 500;">Join Google Meet</a>
        </p>
        <p>Ensure you have a stable internet connection and your development environment is ready. We look forward to speaking with you.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Flipkart Recruitment Team<br>Flipkart Internet Private Limited</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    { sender: 'LinkedIn Learning', subject: 'New Course: Mastering React Hooks in 2025', description: 'Expand your frontend skills with our latest React course.', date: '2025-07-03 09:00', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Hi Nishit,</p><p>Unlock the full potential of React development with our brand new course on React Hooks. Learn best practices and build more efficient applications.</p>' },
    { sender: 'Tech News Daily', subject: 'Top 5 AI Trends from This Week', description: 'Stay updated with the latest in Artificial Intelligence.', date: '2025-07-02 11:00', isRead: false, type: 'inbox', category: 'updates',
        content: '<p>Dear Reader,</p><p>Discover the cutting-edge advancements in AI from the past week. From new language models to robotics, we cover it all.</p>' },
    { sender: 'Code Academy', subject: 'Your Learning Path Update: JavaScript Essentials', description: 'Continue your journey to become a web developer.', date: '2025-07-01 16:00', isRead: true, type: 'inbox', category: 'promotions',
        content: '<p>Hi Nishit,</p><p>Your JavaScript Essentials learning path has new modules available. Keep coding and building amazing projects!</p>' },

    // Older Emails (June 23 onwards, using Mon DD format)
    { sender: 'Flipkart Careers', subject: 'Re: Job Offer: Front End Developer at Flipkart for Nishit! - Next Steps', description: 'Congratulations! We have selected 60 candidates, but only 10 seats are available. You need to pass 5 exams.', date: '2025-06-23 12:00', isRead: false, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <p>Thank you for your prompt response and interest in the Front-End Developer at Flipkart. We appreciate your questions and are happy to provide clarity on the next steps.</p>
        <p>We have provisionally selected approximately 60 highly talented candidates, including yourself, for this role. However, there are only 10 final seating positions available. To ensure fairness and to identify the top performers, we will be conducting a series of 5 technical assessments/exams.</p>
        <p>These exams will cover:</p>
        <ol>
            <li><strong>Advanced HTML/CSS & Responsive Design</strong></li>
            <li><strong>JavaScript Proficiency & ES6+ Features</strong></li>
            <li><strong>React/Angular/Vue Framework Expertise</strong> (your preferred framework)</li>
            <li><strong>Data Structures & Algorithms (DSA) for Frontend</strong></li>
            <li><strong>Problem Solving & Logical Reasoning</strong></li>
        </ol>
        <p>The detailed schedule, platform access, and preparation guidelines for these assessments will be shared with you <strong>very soon on our official WhatsApp group.</strong> Please ensure you are a part of the group for timely updates. Your performance in these exams will be the sole determinant for the final selection.</p>
        <p>Regarding your other questions:</p>
        <ul>
            <li><strong>Onboarding:</strong> For the successful top 10 candidates, a comprehensive virtual onboarding program will be conducted, followed by in-person orientation once you join our Bangalore office.</li>
            <li><strong>Technical Rounds:</strong> These 5 exams replace any further traditional technical interview rounds.</li>
            <li><strong>Reporting Manager:</strong> You will be reporting to the Senior Front-End Lead of your assigned team, details of which will be communicated upon final selection.</li>
        </ul>
        <p>We understand this might be a unique approach, but it allows us to identify the most adept individuals for these highly competitive roles. We wish you the very best in these upcoming assessments and look forward to potentially welcoming you to the Flipkart team!</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Flipkart Recruitment Team<br>Flipkart Internet Private Limited</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Your Reply to Flipkart (Sent email)
    { sender: 'Nishit Baleja', subject: 'Re: Job Offer: Front End Developer at Flipkart!', description: 'Thank you for the offer! I have some questions about joining, next technical rounds, etc.', date: '2025-06-23 10:30', isRead: true, type: 'sent', category: 'primary',
        content: `
        <p>Dear Flipkart Recruitment Team,</p>
        <p>Thank you very much for the offer to join Flipkart as a Front-End Developer. I am very excited about this opportunity!</p>
        <p>Before I formally accept, I had a few questions:</p>
        <ul>
            <li>Could you please provide more details on the onboarding process and what the initial few days or weeks will look like?</li>
            <li>Will there be any further technical rounds or assessments required before joining?</li>
            <li>What are the next steps in the process after this offer acceptance?</li>
            <li>Could you elaborate on the team structure and who I would be directly reporting to for day-to-day tasks?</li>
        </ul>
        <p>I look forward to your response and am eager to move forward with this exciting role.</p>
        <p style="color: #500050;">Best regards,</p>
        <p style="color: #500050;">Nishit Baleja</p>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    // Emails for June 22
    { sender: 'Google', subject: 'Your Google Account was recovered successfully!', description: 'Account recovered successfully nishitbaleja@gmail.com', date: '2025-06-22 15:00', isRead: false, type: 'inbox', category: 'updates',
        content: '<p>Dear User,</p><p>This is a sample content for Google recovery email. Your Google Account was recovered successfully! If this was you, you can safely disregard this message. If not, please review your account activity.</p>' },
    { sender: 'Google', subject: 'Security alert', description: 'Your password was changed nishitbaleja@gmail.com The password for your Google Account nishitba...', date: '2025-06-22 10:00', isRead: false, type: 'inbox', category: 'updates',
        content: '<p>Dear User,</p><p>Security Alert: Your password for your Google Account nishitbaleja@gmail.com was recently changed. If you did not make this change, please contact Google support immediately.</p>' },
    { sender: 'Google One', subject: 'Welcome - you now have the Google AI Pro plan', description: 'Start using your new AI features today', date: '2025-06-22 09:00', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear User,</p><p>Welcome to Google AI Pro! You now have access to advanced AI features. Explore the new capabilities and enhance your productivity with our latest tools.</p>' },
    { sender: 'Google Play', subject: 'Your Google Play Order Receipt from 22 Jun 2025', description: 'Play thank you you have si...', date: '2025-06-22 08:00', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear User,</p><p>Thank you for your recent purchase on Google Play. Your order for [App/Item Name] has been successfully processed. Receipt attached.</p>' },
    { sender: 'Google Payments', subject: 'Google: Update your tax info', description: 'Google Update your tax information to make sure that the correct taxes are applied...', date: '2025-06-22 07:00', isRead: false, type: 'inbox', category: 'updates',
        content: `
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://www.gstatic.com/payments/p/images/google_logo_payments_lockup_h_en.svg" alt="Google Payments" style="height: 30px;">
        </div>
        <h2 style="text-align: center; margin-bottom: 20px; color: #202124;">Update your tax information</h2>
        <p style="margin-bottom: 16px; color: #5f6368;">To make sure that the correct taxes are applied to the Google services that you use, please update your tax information for NISHIT BALEJA as soon as possible. You may be unable to claim tax exemptions or view tax information on your invoices until this information is updated.</p>
        <div style="text-align: center; margin-bottom: 30px;">
            <a href="#" style="background-color: #1a73e8; color: white; padding: 10px 24px; text-decoration: none; border-radius: 4px; font-weight: 500;">Update tax info</a>
        </div>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin-bottom: 20px;">
        <div style="font-size: 12px; color: #757575; text-align: center;">
            <a href="#" style="color: #1a73e8; text-decoration: none; margin: 0 10px;">Help Centre</a>
            <span>|</span>
            <a href="#" style="color: #1a73e8; text-decoration: none; margin: 0 10px;">Contact us</a>
            <p style="margin-top: 10px;">Payments profile ID: 8493-7240-7400</p>
            <p style="margin-top: 10px;">Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043</p>
        </div>
        `
    },
    { sender: 'LinkedIn', subject: 'New jobs similar to Frontend Developer at Saras AI Institute', description: 'jobs similar to Frontend Developer at Saras AI Institute...', date: '2025-06-22 06:00', isRead: false, type: 'inbox', category: 'social',
        content: '<p>Hi Nishit,</p><p>We found new job openings at Saras AI Institute for Frontend Developer roles. These positions match your skills and experience. Apply now!</p>' },

    // Emails for June 21
    { sender: 'YONO SBI', subject: 'Single app, simple savings solutions', description: 'To know more, visit -> https://sbi.co.in/web/yono/blog/secure-grow-your-wea...', date: '2025-06-21', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear Customer,</p><p>Discover YONO SBI, the ultimate app for all your banking needs. Manage your savings, apply for loans, and much more from a single platform. Visit our blog for details.</p>' },

    // Emails for June 19
    { sender: 'Dribbble', subject: 'Your invitation is expiring soon.', description: 'Hi NISHIT BALEJA, Your invitation is expiring soon. Time is running out to invite an...', date: '2025-06-19', isRead: false, type: 'inbox', category: 'social',
        content: '<p>Hi NISHIT BALEJA,</p><p>Your exclusive Dribbble invitation is about to expire. Don\'t miss the chance to join our community of designers. Invite a friend today!</p>' },

    // Emails for June 17
    { sender: 'LinkedIn', subject: 'Emma Howard just posted new content.', description: 'Check it out! - Senior Data Science opening in Bellevue! Masters + 3-4 ye...', date: '2025-06-17', isRead: false, type: 'inbox', category: 'social',
        content: '<p>Dear Connections,</p><p>Emma Howard has posted new content on LinkedIn. Check out her latest article about Senior Data Science openings in Bellevue. Requires 3-4 years of experience.</p>'},
    { sender: 'Naukri', subject: 'NISHIT BALEJA, Top companies are hiring on Naukri right now!', description: 'Top companies are hiring on Naukri right now! E...', date: '2025-06-17', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear NISHIT BALEJA,</p><p>Many top companies are actively hiring on Naukri. Explore thousands of new job opportunities in your field today!</p>' },
    { sender: 'YONO SBI', subject: 'Enhance Your UPI transactions with RuPay Credit Card!', description: 'This is a system generated mail so please do not reply t...', date: '2025-06-17', isRead: false, type: 'inbox', category: 'updates',
        content: '<p>Dear Customer,</p><p>Great news! You can now enhance your UPI transactions by linking your RuPay Credit Card. Enjoy seamless payments and exciting rewards.</p>' },

    // Emails for June 16
    { sender: 'Beyoung', subject: 'Nishit Baleja, you\'re family now 👨‍👩‍👧‍👦', description: 'Your Rs. 120 Off Coupon Expiring Soon! 👇 DOWNLOAD THE APP', date: '2025-06-16', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear Nishit Baleja,</p><p>Welcome to the Beyoung family! Here\'s a special Rs. 120 off coupon for your next purchase. Download our app and start shopping!</p>' },

    // Emails for June 15
    { sender: 'Flipkart Careers', subject: 'Job Offer: Front End Developer at Flipkart for Nishit!', description: 'Exciting opportunity with 7 LPA package!', date: '2025-06-15', isRead: true, type: 'inbox', category: 'primary',
        content: `
        <p>Dear Nishit Baleja,</p>
        <br>
        <p>Congratulations! Following your impressive performance during the interview process, we are delighted to offer you the position of <strong>"Front-End Developer at Flipkart"</strong>.</p>
        <br>
        <p>We were particularly impressed with your skills in HTML, CSS, JavaScript, and modern front-end frameworks, which align perfectly with our team's requirements.</p>
        <br>
        <p>Your annual compensation package for this role will be <strong>₹₹7,00,000 (Seven Lakhs Indian Rupees)</strong>, along with other benefits as per company policy. A detailed breakdown of your compensation and benefits will be provided in the official offer letter attached to this email.</p>
        <br>
        <p>Your tentative start date will be <strong>July 15, 2025</strong>, but this can be discussed and adjusted if needed. You will be reporting to the Head of Front-End Development.</p>
        <br>
        <p class="emailDetail__footer-note">This is an automatically generated email. Please do not reply to this email directly.</p>
        `
    },
    { sender: 'Beyoung', subject: 'Final Chance', description: 'to save 12% on your order! You\'re leaving such good stuff in your cart 😟 Don\'t miss this chance to...', date: '2025-06-15', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear Valued Customer,</p><p>This is your final chance to save 12% on your Beyoung order! Your cart is waiting. Don\'t miss out on your favorite items.</p>' },
    { sender: 'LinkedIn', subject: 'Emma Howard just posted new content.', description: 'Check it out! - Any Applied Scientists with a focus in Optimization? Amazo...', date: '2025-06-15', isRead: false, type: 'inbox', category: 'social',
        content: '<p>Dear Connections,</p><p>Emma Howard has posted new content on LinkedIn. See her latest update on Applied Scientists roles focusing on Optimization. Great insights for your career.</p>' },

    // Emails for June 14
    { sender: 'no-reply', subject: 'Payment Confirmation - Sherlyans HI NISHIT BALEJA', description: 'You\'ve Successfully Paid ₹2499.00 Paid Successfully', date: '2025-06-14', isRead: false, type: 'inbox', category: 'updates',
        content: `
        <p>Dear NISHIT BALEJA,</p>
        <br>
        <p>You\'ve Successfully Paid ₹2499 for "Three.js Domination" Course. You can continue your learning on our platform.</p>
        <br>
        <p>Thanks for your trust and support, Happy Coding, Sherlyans Coding School.</p>
        `
    },
    { sender: 'Payments', subject: 'Payment Successful for SHERLYANS PRIVATE LIMITED', description: 'SHERLYANS PRIVATE LIMITED ₹2499.00 Paid Successfully', date: '2025-06-14', isRead: false, type: 'inbox', category: 'updates',
        content: '<p>Dear Customer,</p><p>Your payment to SHERLYANS PRIVATE LIMITED for ₹2499.00 has been successful. Thank you for your payment.</p>' },
    { sender: 'no-reply', subject: 'Enrollment Confirmation - Sherlyans HI NISHIT BALEJA', description: 'You\'ve Successfully Enrolled in "JOB READY AI POWERED COHORT: WEB + DSA + APTITUDE" Course.', date: '2025-06-14', isRead: false, type: 'inbox', category: 'promotions',
        content: `
        <div style="text-align: center; margin-bottom: 30px; background-color: #f8f8f8; padding: 20px 0; border-bottom: 1px solid #eee;">
            <img src="https://assets-global.website-files.com/64b0f94d930fe02e1c3132e4/64b0f94d930fe02e1c3132e4_Sheryians%20Logo.png" alt="The Sheryians Coding School Logo" style="height: 50px; display: inline-block; vertical-align: middle; margin-right: 10px;">
            <span style="font-size: 24px; font-weight: 700; color: #202124; vertical-align: middle;">The Sheryians Coding School</span>
        </div>
        <p style="margin-bottom: 16px; color: #5f6368; text-align: center;">HI NISHIT BALEJA,</p>
        <h2 style="font-size: 20px; font-weight: 500; text-align: center; margin-bottom: 20px; line-height: 1.3;">You're Successfully Enrolled in "JOB READY AI POWERED COHORT: WEB + DSA + APTITUDE" Course.</h2>
        <p style="margin-bottom: 16px; color: #5f6368; text-align: center;">You need to buy this <a href="#" style="color: #1a73e8; text-decoration: none;">Course</a> for ₹7080 to access all content of this course. However you can try it for free also with limited access.</p>
        <a href="#" class="sherlyans-button">Your Enrolled Courses</a>
        <p class="footer-text">
            You are getting this enrollment alert email because you have Enrolled in one of our Courses. If you<br>
            want to cancel your enrollment, just <a href="#" style="color: #1a73e8; text-decoration: none;">sign in</a> to your (Sheryians) account.
        </p>
        <p class="footer-text">
            For any queries you can call us on <a href="tel:+91819181752" style="color: #1a73e8; text-decoration: none;">819181752</a>. <a href="#" style="color: #1a73e8; text-decoration: none;">Call.</a>
        </p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin-bottom: 20px;">
        <p class="footer-text">
            © Sheryians 2023 | Sheryians Coding School
        </p>
        <p class="footer-text">
            Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043
        </p>
        `
    },
    { sender: 'Beyoung', subject: 'Nishit Baleja, Don\'t Miss Your Welcome Gift', description: 'Offer inside + DOWNLOAD THE APP appp-fieview.mesics.2024...', date: '2025-06-14', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear Nishit Baleja,</p><p>Claim your special welcome gift from Beyoung! Find the offer inside this email and download our app for more exclusive deals.</p>' },

    // Emails for June 13
    { sender: 'YONO SBI', subject: 'Cash withdrawals and fund transfers made quicker and safer', description: 'This is a system generated mail so please do not reply t...', date: '2025-06-13', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear Customer,</p><p>Now manage your cash withdrawals and fund transfers quicker and safer with YONO SBI. Experience seamless banking like never before.</p>' },

    // Emails for June 12
    { sender: 'Calebe Ferrari vis.', subject: 'Cybersecurity Operations Engineer', description: 'Infrastructure Security & Maintenance (IOT Systems) - We are hiring a C...', date: '2025-06-12', isRead: false, type: 'inbox', category: 'updates',
        content: '<p>Dear Candidate,</p><p>Calebe Ferrari is hiring for a Cybersecurity Operations Engineer specializing in Infrastructure Security & Maintenance. Apply now to join a leading team.</p>' },
    { sender: 'Beyoung', subject: 'Your bag is full, get your favorites!', description: 'Take Extra Rs. 150 off your cart! Product Details: Pick Any 2 - Loose-fit Pyjama C...', date: '2025-06-12', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear Valued Customer,</p><p>Your shopping bag at Beyoung is full! Don\'t miss out on your favorites. Get an extra Rs. 150 off your cart. Check product details.</p>' },
    { sender: 'Beyoung', subject: 'Your cart is loaded with bestsellers!', description: '& they\'re selling out really fast. Grab \'em now! Product Image Item: Pick An...', date: '2025-06-12', isRead: false, type: 'inbox', category: 'promotions',
        content: '<p>Dear Valued Customer,</p><p>Your cart is filled with bestsellers that are selling out fast! Grab them now before they\'re gone. View product image items and complete your order.</p>' },
];


// Define the simulated "current date and time" for comparison.
const simulatedCurrentDate = new Date('2025-08-05T10:30:56'); // Updated to reflect the new date of the top email

// Helper function to get the day of the week name (short format)
function getDayName(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}

// Helper function to get the month abbreviation
function getMonthAbbr(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
}

// Helper function to format time (HH:MM AM/PM)
function formatTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${strMinutes} ${ampm}`;
}

// Helper function to check if two Date objects represent the same day
function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
}

// Helper function to dynamically determine the displayTime string (Final and Corrected Version)
function getDisplayTime(emailDateString) {
    // Custom logic to handle the specific request for the top email
    if (emailDateString === '2025-08-05 10:00' || emailDateString === '2025-08-05 09:30') {
        return 'Aug 05';
    }

    const emailDate = parseDateForSort(emailDateString);
    const today = new Date(simulatedCurrentDate.getTime());
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const emailDateOnly = new Date(emailDate.getFullYear(), emailDate.getMonth(), emailDate.getDate());

    const oneDay = 1000 * 60 * 60 * 24;

    // Custom logic to show 'Jul 30' for mails with date 2025-07-30
    const mailDate = emailDateOnly.getTime();
    const wednesdayJuly30 = new Date('2025-07-30T00:00:00').getTime();
    
    if (mailDate === wednesdayJuly30) {
        return `${getMonthAbbr(emailDate)} ${emailDate.getDate()}`; // Returns 'Jul 30'
    }

    if (isSameDay(emailDateOnly, todayMidnight)) {
        return formatTime(emailDate); // Today: "HH:MM AM/PM"
    } else if (isSameDay(emailDateOnly, new Date(todayMidnight.getTime() - oneDay))) {
        return 'Yesterday'; // Yesterday: "Yesterday"
    } else if (emailDate.getFullYear() === today.getFullYear()) {
        const diffDays = Math.floor((todayMidnight.getTime() - emailDateOnly.getTime()) / oneDay);

        if (diffDays >= 2 && diffDays <= 6) {
            return getDayName(emailDate); // Display Day Name (e.g., "Mon", "Tue", "Wed")
        } else {
            return `${getMonthAbbr(emailDate)} ${emailDate.getDate()}`; // Example: "Jul 05"
        }
    } else {
        return `${getMonthAbbr(emailDate)} ${emailDate.getDate()}, ${emailDate.getFullYear()}`;
    }
}


// Helper function to parse date strings into Date objects for comparison
// Handles 'YYYY-MM-DD HH:MM' for more precise sorting
function parseDateForSort(dateStr) {
    return new Date(dateStr.includes(' ') ? dateStr.replace(' ', 'T') : dateStr + 'T00:00:00');
}

// Global variable to keep track of the currently active folder/type
let currentActiveFolder = 'inbox'; // Default active folder
let currentActiveCategory = 'primary'; // Default active category for inbox sections ('primary' shows all inbox or just primary if filtered)

// Function to calculate and update all the counts (Inbox, Promotions, Social, Updates, Total)
function updateCounts() {
    const inboxUnreadCount = emailData.filter(mail => mail.type === 'inbox' && !mail.isRead).length;
    document.getElementById('inboxCount').textContent = inboxUnreadCount.toLocaleString(); // Use toLocaleString for comma separator

    // Calculate unread counts for categories (Promotions, Social, Updates)
    const promotionsUnreadCount = emailData.filter(mail => mail.type === 'inbox' && mail.category === 'promotions' && !mail.isRead).length;
    document.getElementById('promotionsCount').textContent = promotionsUnreadCount > 0 ? `${promotionsUnreadCount} new` : '';

    const socialUnreadCount = emailData.filter(mail => mail.type === 'inbox' && mail.category === 'social' && !mail.isRead).length;
    document.getElementById('socialCount').textContent = socialUnreadCount > 0 ? `${socialUnreadCount} new` : '';

    const updatesUnreadCount = emailData.filter(mail => mail.type === 'inbox' && mail.category === 'updates' && !mail.isRead).length;
    document.getElementById('updatesCount').textContent = updatesUnreadCount > 0 ? `${updatesUnreadCount} new` : '';

    // Determine the count for the "1-X of Y" display based on the currently viewed category/folder
    let totalEmailsInCurrentDisplay = 0;
    if (currentActiveFolder === 'inbox') {
        if (currentActiveCategory === 'primary') {
            totalEmailsInCurrentDisplay = emailData.filter(mail => mail.type === 'inbox').length;
        } else {
            totalEmailsInCurrentDisplay = emailData.filter(mail => mail.type === 'inbox' && mail.category === currentActiveCategory).length;
        }
    } else {
        totalEmailsInCurrentDisplay = emailData.filter(mail => mail.type === currentActiveFolder).length;
    }

    // The total overall emails (e.g., 1297) is a fixed number for display realism
    const totalOverallEmailsForPagination = 1297;
    document.getElementById('emailListRangeAndTotal').textContent = `1-${totalEmailsInCurrentDisplay} of ${totalOverallEmailsForPagination}`;
}


// Function to render emails based on the selected type (e.g., 'inbox', 'sent')
function renderEmails(emailType) {
    const emailListDiv = document.querySelector('.emailList__list');
    emailListDiv.innerHTML = ''; // Clear current emails

    currentActiveFolder = emailType; // Update the global active folder

    let emailsToDisplay = [];

    // Filter emails based on folder type (inbox, sent, starred) and category if in inbox
    if (emailType === 'inbox') {
        if (currentActiveCategory === 'primary') {
            emailsToDisplay = emailData.filter(mail => mail.type === 'inbox');
        } else {
            emailsToDisplay = emailData.filter(mail => mail.type === 'inbox' && mail.category === currentActiveCategory);
        }
    } else if (emailType === 'sent') {
        emailsToDisplay = emailData.filter(mail => mail.type === 'sent');
    } else if (emailType === 'starred') {
        emailsToDisplay = emailData.filter(mail => mail.isStarred);
    }
    // Add more conditions for 'snoozed', 'drafts', etc. if you add those flags/types
    else {
        emailsToDisplay = []; // Default to empty list for unsupported folder type
    }

    // Sort filtered emails by date (and time if available) in descending order (newest first)
    emailsToDisplay.sort((a, b) => {
        const dateA = parseDateForSort(a.date);
        const dateB = parseDateForSort(b.date);
        return dateB - dateA;
    });

    // Render the filtered and sorted emails
    emailsToDisplay.forEach(mail => {
        try {
            const emailRowElement = addEmailRow(mail);
            if (emailRowElement) {
                emailListDiv.appendChild(emailRowElement);
            }
        } catch (e) {
            console.error("Error adding email row:", mail, e);
        }
    });

    // AFTER rendering emails, update the counts
    updateCounts();

    // Update the browser tab title
    updateBrowserTitle();
}


// --- Function to open the detailed email view ---
function openEmailDetail(mail) {
    const emailListDiv = document.querySelector('.emailList');
    const emailDetailDiv = document.querySelector('.emailDetail');

    // Hide the email list and show the email detail view
    emailListDiv.classList.add('emailList--hidden');
    emailDetailDiv.classList.add('emailDetail--visible');

    // Mark the email as read
    if (!mail.isRead) { // Only change if it's currently unread
        mail.isRead = true;
        // Re-render the current folder/category to reflect the read status visually
        renderEmails(currentActiveFolder); // Re-render the list based on the active folder
    }

    // Populate the detailed view with email content
    document.getElementById('emailDetailSubject').textContent = mail.subject;

    const emailDetailSenderH4 = emailDetailDiv.querySelector('.emailDetail__infoLeft h4');
    const emailDetailRecipientP = emailDetailDiv.querySelector('.emailDetail__infoLeft p');
    const myEmail = 'nishitbaleja@gmail.com';

    let senderEmail = '';
    let recipientEmail = '';

    // Logic to determine sender and recipient email IDs for display
    if (mail.sender === 'Nishit Baleja') {
        // This is a sent email from you
        senderEmail = myEmail;
        if (mail.subject.includes("Flipkart")) {
            recipientEmail = 'careers@flipkart.com';
        } else if (mail.subject.includes("Luxoft")) {
            recipientEmail = 'HRAdminandPayroll@luxoft.com';
        } else if (mail.subject.includes("Innovate Solutions")) {
            recipientEmail = 'info@innovative-solutions.in';
        } else if (mail.subject.includes("Leave Request: Chicken Pox")) {
            recipientEmail = 'hr@flipkart.com';
        } else {
            recipientEmail = 'unknown-recipient@example.com';
        }
    } else {
        // This is a received email
        recipientEmail = myEmail;
        if (mail.sender === "Flipkart Careers") {
            senderEmail = 'careers@flipkart.com';
        } else if (mail.sender === "Flipkart HR") {
            senderEmail = 'hr@flipkart.com';
        } else if (mail.sender === "no-reply" && mail.subject.includes("Sherlyans")) {
            senderEmail = 'no-reply@sherlyans.com';
        } else if (mail.sender === "Google Payments") {
            senderEmail = 'payments-noreply@google.com';
        } else if (mail.sender.toLowerCase().includes("sbi")) {
            senderEmail = 'noreply@sbi.co.in';
        } else if (mail.sender === "IBM Careers") {
            senderEmail = 'careers@ibm.com';
        } else if (mail.sender === "Amazon Recruitment") {
            senderEmail = 'recruitment@amazon.com';
        } else if (mail.sender === 'Luxoft HR') {
            senderEmail = 'HRAdminandPayroll@luxoft.com';
        } else if (mail.sender === 'Innovate Solutions') {
            senderEmail = 'info@innovative-solutions.in';
        } else if (mail.sender === 'Slack') {
            senderEmail = 'notifications@slack.com';
        } else {
            senderEmail = `${mail.sender.toLowerCase().replace(/\s/g, '')}@example.com`;
        }
    }

    // Set the display text using the extracted email IDs
    emailDetailSenderH4.innerHTML = senderEmail;
    emailDetailRecipientP.innerHTML = `to ${recipientEmail}`;

    // --- Profile Picture/Logo Logic ---
    const profilePicSmall = emailDetailDiv.querySelector('.profile-pic-small');
    profilePicSmall.innerHTML = ''; // Clear previous content to ensure clean re-render

    let logoAdded = false; // Flag to track if an image logo was added

    if (mail.sender === 'IBM Careers') {
        const ibmLogo = document.createElement('img');
        ibmLogo.src = 'https://w7.pngwing.com/pngs/180/10/png-transparent-ibm-logo-management-business-innovation-ibm-blue-angle-company-thumbnail.png';
        ibmLogo.alt = 'IBM Logo';
        profilePicSmall.appendChild(ibmLogo);
        logoAdded = true;
    } else if (mail.sender === 'Amazon Recruitment') {
        const amazonLogo = document.createElement('img');
        amazonLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg';
        amazonLogo.alt = 'Amazon Logo';
        profilePicSmall.appendChild(amazonLogo);
        logoAdded = true;
    } else if (mail.sender === 'Luxoft HR') {
        const luxoftLogo = document.createElement('img');
        luxoftLogo.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAflBMVEX////x7vbo4vDq5fH6+Pvt6fM8AI9RAJhFAJPLv91zR6lMAJa/sNZTAJlfJJ9XD5u5qNKwncx8Va5bG52Zfr5cHp5uQKf08vjg2et4T6xdIJ5oNKNsPKa0os+hicNWC5vOw9/d1eiEYbObgb+KabZjLKGoksiQcrmii8TVzORKH+TVAAABE0lEQVR4AXWTBQ7EMAwEXYYUjpm5///gybaiTSJlhOvt3aiuTJSkGZOSR67TgoiKsmLqhlxaw8NSftb1AzO6/Uxm/VzTYikPrNAnhifrDSnbamDMjiz7pQwKm1VyOCJDAAkmgcCVJBpPawi8P10uNKVmGPozWkiqRtNlXLduC8mVlDUEkLjLuHENAom5B+NAgmWAQHKdU5SHSjKKsVjLqyax/txjFQBkRpb5oBgbFhz6PNbPIeD0DPtUBS+rMzvyOR5kCbn93oe333+u3Jsb0vXi9jsRjF83eZI3Cw5LUvLrwHFA/1PBZHNTcR4vEIR38fI//SCCA4G8PziS54jHA4msa5LjNcHqHnq8E28N1x+cP0N/xx4YBeI3lpUAAAAASUVORK5CYII='; // Base64 Luxoft logo
        luxoftLogo.alt = 'Luxoft Logo';
        profilePicSmall.appendChild(luxoftLogo);
        logoAdded = true;
    } else if (mail.sender === 'Innovate Solutions') {
        const innovateLogo = document.createElement('img');
        innovateLogo.src = 'https://www.innovatesolutions.com/assets/images/logo.png'; // Example Innovate Solutions logo
        innovateLogo.alt = 'Innovate Solutions Logo';
        profilePicSmall.appendChild(innovateLogo);
        logoAdded = true;
    } else if (mail.sender === 'Flipkart Careers' || mail.sender === 'Flipkart HR') { // Added for Flipkart
        const flipkartLogo = document.createElement('img');
        flipkartLogo.src = 'https://play-lh.googleusercontent.com/FA_rzaEeLlumm0qh68q3z5Pt-PGMVPf2Z28_pbega7SaXSiKjSzh-0MZceB3FpdvQIBq'; // Updated to the provided URL
        flipkartLogo.alt = 'Flipkart Logo';
        profilePicSmall.appendChild(flipkartLogo);
        logoAdded = true;
    } else if (mail.sender === 'Slack') { // Added for Slack
        const slackLogo = document.createElement('img');
        slackLogo.src = 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_48.png'; // Example Slack logo
        slackLogo.alt = 'Slack Logo';
        profilePicSmall.appendChild(slackLogo);
        logoAdded = true;
    }
    // Add other specific logos here if needed for other senders

    if (logoAdded) {
        const imgElement = profilePicSmall.querySelector('img');
        if (imgElement) { // Ensure imgElement exists before applying styles
            imgElement.style.width = '32px';
            imgElement.style.height = '32px';
            imgElement.style.borderRadius = '50%';
            imgElement.style.objectFit = 'contain'; // Changed to contain to show full logo
            imgElement.style.backgroundColor = 'transparent'; // Ensure transparent background
        }
        profilePicSmall.style.backgroundColor = 'transparent'; // Ensure parent div also has transparent background if logo is added
    } else {
        // Default to first letter of sender's name
        profilePicSmall.textContent = mail.sender.charAt(0).toUpperCase();
        profilePicSmall.style.backgroundColor = '#8c67a5'; // Example default color for text initials
    }
    // --- End Profile Picture/Logo Logic ---


    // Populate email body. Use innerHTML because content contains HTML tags (like <p>, <br>, <strong>)
    document.querySelector('.emailDetail__body').innerHTML = mail.content || '<p>No content for this email.</p>'; // Fallback for empty content

    // Set the display date in the email detail view (using the same logic for consistency)
    document.getElementById('emailDetailDate').textContent = getDisplayTime(mail.date);

    // Update the "1 of X" text in email detail view (now 1 of X, where X is total in current view)
    const currentFilteredList = emailData.filter(m => m.type === currentActiveFolder);
    const totalEmailsInCurrentViewCount = currentFilteredList.length;

    emailDetailDiv.querySelector('.emailDetail__headerRight p').textContent = `1 of ${totalEmailsInCurrentViewCount}`;

    // Update browser title to email subject when opened
    document.title = `${mail.subject} - Nishit Baleja`;
}

// --- Function to close the detailed email view and go back to list ---
function closeEmailDetail() {
    const emailListDiv = document.querySelector('.emailList');
    const emailDetailDiv = document.querySelector('.emailDetail');

    // Show the email list and hide the email detail view
    emailListDiv.classList.remove('emailList--hidden');
    emailDetailDiv.classList.remove('emailDetail--visible');

    // Update browser title back to folder view
    updateBrowserTitle();
}

// Function to update the browser tab title based on folder and unread count
function updateBrowserTitle() {
    const unreadCount = emailData.filter(mail => mail.type === 'inbox' && !mail.isRead).length;
    let titleText = '';

    if (currentActiveFolder === 'inbox') {
        titleText = `Inbox (${unreadCount}) - nishitbaleja@gmail.com`;
    } else if (currentActiveFolder === 'sent') {
        titleText = `Sent - nishitbaleja@gmail.com`;
    } else if (currentActiveFolder === 'starred') {
        titleText = `Starred - nishitbaleja@gmail.com`;
    } else {
        titleText = `Gmail Clone - nishitbaleja@gmail.com`; // Default fallback
    }
    document.title = titleText;
}


// --- DOM Content Loaded and Initial Rendering ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial render: show Inbox emails by default
    renderEmails('inbox');

    // --- Event Listeners for Sidebar and Email List Sections ---
    const sidebarOptions = document.querySelectorAll('.sidebarOption');
    const emailListSections = document.querySelectorAll('.emailList__section');
    const backButton = document.querySelector('.emailDetail__back'); // Get the back button

    // Handle sidebar option clicks
    sidebarOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove 'active' class from all sidebar options
            sidebarOptions.forEach(opt => opt.classList.remove('sidebarOption--active'));
            // Add 'active' class to the clicked option
            option.classList.add('sidebarOption--active');

            // Also make sure the "Primary" section tab is active in the header if inbox is selected
            emailListSections.forEach(sec => sec.classList.remove('emailList__section--active'));
            const primarySection = document.querySelector('.emailList__section h3');
            if (primarySection && option.querySelector('h3').textContent.toLowerCase() === 'inbox') {
                primarySection.closest('.emailList__section').classList.add('emailList__section--active');
                currentActiveCategory = 'primary'; // Ensure category is reset to primary for inbox
            }


            closeEmailDetail(); // Always close detail view when changing sidebar option

            const optionText = option.querySelector('h3').textContent.toLowerCase();
            // Map sidebar text to email type for filtering
            if (optionText === 'inbox') {
                renderEmails('inbox');
            } else if (optionText === 'sent') {
                renderEmails('sent');
            } else if (optionText === 'starred') {
                renderEmails('starred');
            } else if (optionText === 'snoozed') {
                console.log("Snoozed functionality not yet implemented in data.");
                renderEmails('snoozed'); // This will currently show an empty list if no such 'type' exists
            } else if (optionText === 'drafts') {
                console.log("Drafts functionality not yet implemented in data.");
                renderEmails('drafts'); // This will currently show an empty list if no such 'type' exists
            }
            // You can add more 'else if' conditions for 'More', 'Work', 'Personal' labels
            // if you add corresponding 'type' or 'label' properties to your emailData.
            console.log(`Sidebar option clicked: ${optionText}`);
        });
    });

    // Handle email list section (Primary, Promotions, etc.) clicks
    emailListSections.forEach(section => {
        section.addEventListener('click', () => {
            // Remove 'active' class from all email list sections
            emailListSections.forEach(sec => sec.classList.remove('emailList__section--active'));
            // Add 'active' class to the clicked section
            section.classList.add('emailList__section--active');

            closeEmailDetail(); // Always close detail view when changing email section

            const sectionText = section.querySelector('h3').textContent.toLowerCase();

            // Set currentActiveCategory based on clicked section and re-render emails
            currentActiveCategory = sectionText;
            renderEmails('inbox'); // Always render the 'inbox' type, but filter by the new category

            console.log(`Email list section clicked: ${sectionText}`);
        });
    });

    // Handle back button click in the detailed email view
    if (backButton) { // Ensure backButton exists before adding listener
        backButton.addEventListener('click', closeEmailDetail);
    }
    
});