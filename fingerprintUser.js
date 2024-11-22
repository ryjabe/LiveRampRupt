// Import Rupt SDK
import Rupt from "rupt";

// Function to fingerprint a user and redirect
async function fingerprintUser() {
  try {
    const { fingerprint_id, confidence } = await Rupt.getFingerprint({
      client_id: 'df27a3f1-2656-40cf-b545-a7a0a295c13b', // Use your client ID
      last_fingerprint: "", // Set to an empty string if no prior fingerprint exists
    });

    console.log("Fingerprint ID:", fingerprint_id);
    console.log("Confidence Level:", confidence);

    // Redirect if fingerprint ID exists
    if (fingerprint_id) {
      const redirectUrl = `https://idsync.rlcdn.com/420486.gif?partner_uid=${encodeURIComponent(fingerprint_id)}`;
      console.log("Redirecting to:", redirectUrl);
      window.location.href = redirectUrl; // Perform the redirect
    } else {
      console.error("Fingerprint ID is undefined!");
      const redirectUrl = `https://idsync.rlcdn.com/420486.gif?partner_uid=123`;
      window.location.href = redirectUrl;
    }
  } catch (error) {
    console.error("Error fingerprinting user:", error);
    const redirectUrl = `https://idsync.rlcdn.com/420486.gif?partner_uid=123`;
    window.location.href = redirectUrl;
  }
}

// Call the function to test it
fingerprintUser();