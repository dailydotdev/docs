import React, { useState } from 'react';
import styles from './StepByStep.module.css';

const StepByStep = ({ steps, allowSkip = true, showProgress = true }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const goToStep = (stepIndex) => {
    if (
      allowSkip ||
      stepIndex <= currentStep + 1 ||
      completedSteps.has(stepIndex - 1)
    ) {
      setCurrentStep(stepIndex);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps((prev) => new Set([...prev, currentStep]));
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const markCompleted = () => {
    setCompletedSteps((prev) => new Set([...prev, currentStep]));
  };

  if (!steps || steps.length === 0) {
    return <div className={styles.error}>No steps provided</div>;
  }

  return (
    <div className={styles.stepByStep}>
      {showProgress && (
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      )}

      <div className={styles.stepNavigation}>
        {steps.map((step, index) => (
          <button
            key={index}
            className={`${styles.stepButton} ${
              index === currentStep ? styles.active : ''
            } ${completedSteps.has(index) ? styles.completed : ''}`}
            onClick={() => goToStep(index)}
            disabled={
              !allowSkip &&
              index > currentStep + 1 &&
              !completedSteps.has(index - 1)
            }
          >
            <span className={styles.stepNumber}>
              {completedSteps.has(index) ? '✓' : index + 1}
            </span>
            <span className={styles.stepTitle}>{step.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.stepContent}>
        <div className={styles.stepHeader}>
          <h3>
            Step {currentStep + 1}: {steps[currentStep].title}
          </h3>
          {steps[currentStep].duration && (
            <span className={styles.duration}>
              ⏱️ {steps[currentStep].duration}
            </span>
          )}
        </div>

        <div className={styles.stepBody}>
          {steps[currentStep].description && (
            <p className={styles.description}>
              {steps[currentStep].description}
            </p>
          )}

          {steps[currentStep].content && (
            <div className={styles.content}>{steps[currentStep].content}</div>
          )}

          {steps[currentStep].code && (
            <div className={styles.codeBlock}>
              <pre>
                <code>{steps[currentStep].code}</code>
              </pre>
            </div>
          )}

          {steps[currentStep].warning && (
            <div className={styles.warning}>
              ⚠️ {steps[currentStep].warning}
            </div>
          )}

          {steps[currentStep].tip && (
            <div className={styles.tip}>💡 {steps[currentStep].tip}</div>
          )}
        </div>

        <div className={styles.stepActions}>
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={styles.prevButton}
          >
            ← Previous
          </button>

          {!completedSteps.has(currentStep) && (
            <button onClick={markCompleted} className={styles.completeButton}>
              Mark as Complete
            </button>
          )}

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={styles.nextButton}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepByStep;
