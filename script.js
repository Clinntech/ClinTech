const SUPABASE_URL = 'sb_publishable_jhLXixzppj1z8XVi06yeoQ_ZgNsVVtH';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oeXl6bXBoY3N1ZHRhcm1taHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNzg5NjUsImV4cCI6MjA5MTY1NDk2NX0.iHJt8yD-S-fGsVObmjQZF1NinV-0cIiyKFqHawslye0';

const _supabase = supabase.createClient(sb_publishable_jhLXixzppj1z8XVi06yeoQ_ZgNsVVtH, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oeXl6bXBoY3N1ZHRhcm1taHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNzg5NjUsImV4cCI6MjA5MTY1NDk2NX0.iHJt8yD-S-fGsVObmjQZF1NinV-0cIiyKFqHawslye0);

const contactForm = document.getElementById('contactForm');
const responseMsg = document.getElementById('responseMsg');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.innerText = "Processing Inquiry...";
        responseMsg.innerText = "";

        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const message = document.getElementById('userMessage').value;

        try {
            const { error } = await _supabase
                .from('messages')
                .insert([{ name, email, message }]);

            if (error) throw error;

            responseMsg.style.color = "#10b981";
            responseMsg.innerText = "Inquiry recorded successfully in the database.";
            contactForm.reset();
            submitBtn.innerText = "Inquiry Sent";

        } catch (err) {
            responseMsg.style.color = "#ef4444";
            responseMsg.innerText = "Error: " + err.message;
            submitBtn.innerText = "Try Again";
            submitBtn.disabled = false;
        }
    });
}