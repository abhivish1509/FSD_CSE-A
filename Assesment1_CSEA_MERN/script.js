document.getElementById('generateResumeButton').onclick = function() {
    const name = document.getElementById('resumeName').value;
    const email = document.getElementById('resumeEmail').value;
    const phone = document.getElementById('resumePhone').value;
    const linkedIn = document.getElementById('resumeLinkedIn').value;
    const github = document.getElementById('resumeGithub').value;
    const experience = document.getElementById('resumeExperience').value;
    const education = document.getElementById('resumeEducation').value;
    const imageFile = document.getElementById('resumeImage').files[0];

    if (!imageFile) {
        alert('Please upload a photo.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('resumePreview').innerHTML = `
            <h2>${name}</h2>
            <img src="${event.target.result}" alt="Profile Photo">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>LinkedIn:</strong> <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
            <h3>Experience</h3><p>${experience}</p>
            <h3>Education</h3><p>${education}</p>
        `;
        document.getElementById('resumePreview').style.display = 'block';
    };
    reader.readAsDataURL(imageFile);
};
