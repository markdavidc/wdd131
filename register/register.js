document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    const addButton = document.getElementById('add');
    addButton.addEventListener('click', () => {
        participantCount++;
        const participantHTML = participantTemplate(participantCount);
        const participantsFieldset = document.querySelector('.participants');
        addButton.insertAdjacentHTML('beforebegin', participantHTML);
    });

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, element) => {
            return total + (parseFloat(element.value) || 0);
        }, 0);
    }

    function submitForm(event) {
        event.preventDefault();

        // Calculate total fees
        const total = totalFees();

        // Get the adult name
        const adultName = document.getElementById('adult_name').value;

        // Hide the form
        form.classList.add('hide');

        // Show the summary
        const summary = document.getElementById('summary');
        summary.innerHTML = successTemplate({ name: adultName, participants: participantCount, fees: total });
        summary.classList.remove('hide');
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);
});



export function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" required>
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}">
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}">
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}">
            </div>
            <div class="item">
                <p>Grade</p>
                <select>
                    <option selected value="" disabled></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
    `;
  }
  
  export function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participant(s) and owe $${info.fees.toFixed(2)} in fees.`;
  }