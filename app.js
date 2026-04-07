// Handle Form Submission
document.getElementById('auditForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Payload for Zapier -> Agency Zoom
    const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        currentPremium: parseFloat(data.currentPremium),
        renewalDate: data.renewalDate // Format: YYYY-MM
    };

    console.log("=== SENDING TO ZAPIER / AGENCY ZOOM (Mocked) ===");
    console.log(JSON.stringify(payload, null, 2));

    // Show loading state
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Processing...";
    submitBtn.disabled = true;
    submitBtn.style.cursor = "wait";

    setTimeout(() => {
        // Transition to success state
        document.getElementById('step1').classList.remove('active');
        document.getElementById('step1').style.display = 'none';
        
        document.getElementById('successState').style.display = 'block';
    }, 1200);

    /*
    // REAL ZAPIER WEBHOOK PORTION:
    const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/12345/abcde/";
    
    try {
        const response = await fetch(zapierWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            document.getElementById('step1').style.display = 'none';
            document.getElementById('successState').style.display = 'block';
        } else {
            alert("Error submitting. Please try again.");
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    } catch (error) {
        console.error("Webhook error:", error);
        alert("Network error.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        submitBtn.style.cursor = "pointer";
    }
    */
});
