'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './IntakeForm.module.css';

interface IntakeFormProps {
  onFormVisible?: (visible: boolean) => void;
}

const TOTAL_STEPS = 5;

const situationOptions = [
  'Just starting the process',
  'Have talked to designers/contractors, looking for additional input',
  'Unsatisfied with received designs or installations, looking for better direction',
];

const yearsOwnedOptions = ['<1 year', '1-5 years', '5-20 years', '20+ years'];

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export default function IntakeForm({ onFormVisible }: IntakeFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    isLocal: null as boolean | null,
    situation: '',
    yearsOwned: '',
    projectDescription: '',
    name: '',
    phone: '',
  });
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          onFormVisible?.(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, [onFormVisible]);

  const progressPercent = (currentStep / TOTAL_STEPS) * 100;

  const handleLocalSelect = (isLocal: boolean) => {
    setFormData({ ...formData, isLocal });
    // Auto-advance after short delay for visual feedback
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handleSituationSelect = (situation: string) => {
    setFormData({ ...formData, situation });
    // Auto-advance after short delay for visual feedback
    setTimeout(() => setCurrentStep(3), 300);
  };

  const handleYearsSelect = (years: string) => {
    setFormData({ ...formData, yearsOwned: years });
    // Auto-advance after short delay for visual feedback
    setTimeout(() => setCurrentStep(4), 300);
  };

  const handleNext = () => {
    if (currentStep === 1 && formData.isLocal !== null) {
      setCurrentStep(2);
    } else if (currentStep === 2 && formData.situation) {
      setCurrentStep(3);
    } else if (currentStep === 3 && formData.yearsOwned) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      // Project description is optional
      setCurrentStep(5);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) return;

    setSubmissionState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionState('success');
      } else {
        setSubmissionState('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionState('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleRetry = () => {
    setSubmissionState('idle');
    setErrorMessage('');
  };

  const getStepClass = (step: number) => {
    if (currentStep === step) return `${styles.formStep} ${styles.stepActive}`;
    if (currentStep > step) return `${styles.formStep} ${styles.stepLeft}`;
    return `${styles.formStep} ${styles.stepRight}`;
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.isLocal !== null;
      case 2: return !!formData.situation;
      case 3: return !!formData.yearsOwned;
      case 4: return true; // Project description is optional
      case 5: return !!formData.name && !!formData.phone;
      default: return false;
    }
  };

  // Success state - show thank you message
  if (submissionState === 'success') {
    return (
      <section className={styles.formSection} id="contact" ref={formRef}>
        <div className={styles.formContainer}>
          <div className={styles.formCard}>
            <div className={styles.successMessage}>
              <h3 className={styles.formTitle}>Thank you, {formData.name}!</h3>
              <p className={styles.privacyNote}>
                We have received your information. Cal or Fynn will reach out
                via text message within 24 hours to schedule your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.formSection} id="contact" ref={formRef}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Get Started</h2>
          <p className={styles.formSubtitle}>A couple questions to see if we&apos;re the right fit!</p>
        </div>

        <div className={styles.formCard}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className={styles.formBody}>
            <div className={styles.formContent}>
              {/* Step 1: Location Question */}
              <div className={getStepClass(1)}>
                <div className={styles.slideContent}>
                  <h3 className={styles.slideQuestion}>Do you live within 30 minutes of Palo Alto?</h3>
                  <p className={styles.slideNote}>*CFC is typically a local-only company, San Francisco to San Jose.</p>

                  <div className={styles.buttonGroup}>
                    <button
                      type="button"
                      className={`${styles.optionButton} ${formData.isLocal === true ? styles.optionButtonSelected : ''}`}
                      onClick={() => handleLocalSelect(true)}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className={`${styles.optionButton} ${formData.isLocal === false ? styles.optionButtonSelected : ''}`}
                      onClick={() => handleLocalSelect(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2: Current Situation */}
              <div className={getStepClass(2)}>
                <div className={styles.slideContent}>
                  <h3 className={styles.slideQuestion}>Which option best describes your current situation?</h3>

                  <div className={styles.optionsList}>
                    {situationOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`${styles.optionButton} ${formData.situation === option ? styles.optionButtonSelected : ''}`}
                        onClick={() => handleSituationSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Years Owned */}
              <div className={getStepClass(3)}>
                <div className={styles.slideContent}>
                  <h3 className={styles.slideQuestion}>How many years have you owned your home?</h3>

                  <div className={styles.optionsGrid}>
                    {yearsOwnedOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`${styles.optionButtonSmall} ${formData.yearsOwned === option ? styles.optionButtonSelected : ''}`}
                        onClick={() => handleYearsSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Project Description */}
              <div className={getStepClass(4)}>
                <div className={styles.slideContent}>
                  <h3 className={styles.slideQuestion}>Additional notes?<br/> <span className={styles.optionalLabel}>(optional)</span></h3>

                  <textarea
                    className={styles.textarea}
                    placeholder="e.g. interested in an outdoor bbq and patio area for our back yard, possibly deck"
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    rows={5}
                  />
                </div>
              </div>

              {/* Step 5: Contact Information */}
              <div className={getStepClass(5)}>
                <div className={styles.slideContent}>
                  <h3 className={styles.slideQuestion}>How should we contact you?</h3>
                  <p className={styles.privacyNote}>Cal or Fynn will reach out via text message within 24 hours 
                    <br/>to schedule your consultation.</p>

                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={submissionState === 'submitting'}
                    />
                    <input
                      type="tel"
                      className={styles.input}
                      placeholder="(650) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={submissionState === 'submitting'}
                    />
                  </div>

                  {submissionState === 'error' && (
                    <p className={styles.errorMessage}>{errorMessage}</p>
                  )}

                  <p className={styles.privacyNote}>
                    We only use your information to contact you directly.
                    <br/>We never share your information.
                  </p>
                </div>
              </div>
            </div>

            {/* Fixed Navigation Footer */}
            <div className={styles.formFooter}>
              <div className={styles.navigationButtons}>
                {currentStep > 1 && submissionState !== 'submitting' && (
                  <button type="button" className={styles.backButton} onClick={handleBack}>
                    Back
                  </button>
                )}
                {currentStep < 5 ? (
                  <button
                    type="button"
                    className={styles.nextButton}
                    onClick={handleNext}
                    disabled={!canProceed()}
                  >
                    Next
                  </button>
                ) : submissionState === 'error' ? (
                  <button
                    type="button"
                    className={styles.submitButton}
                    onClick={handleRetry}
                  >
                    Try Again
                  </button>
                ) : (
                  <button
                    type="button"
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    disabled={!canProceed() || submissionState === 'submitting'}
                  >
                    {submissionState === 'submitting' ? 'Submitting...' : 'Submit'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
