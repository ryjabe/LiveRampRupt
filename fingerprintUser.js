// Import Rupt SDK
import Rupt from "rupt";

// Function to fingerprint a user
async function fingerprintUser() {
  try {
    const { fingerprint_id, confidence } = await Rupt.getFingerprint({
      client_id: 'df27a3f1-2656-40cf-b545-a7a0a295c13b', // Use your client ID
      last_fingerprint: "", // Set to an empty string if no prior fingerprint exists
    });

    console.log("Fingerprint ID:", fingerprint_id);
    console.log("Confidence Level:", confidence);
  } catch (error) {
    console.error("Error fingerprinting user:", error);
  }
}

// Call the function to test it
fingerprintUser();