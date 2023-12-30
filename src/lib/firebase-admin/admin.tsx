import admin from "firebase-admin";
import {
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_PRIVATE_KEY,
} from "@env";

interface FirebaseAdminAppParams {
  projectId: string;
  clientEmail: string;
  storageBucket: string;
  privateKey: string;
}

function formatPrivateKey(key: string) {
  return key.replace(/\\n/g, "\n");
}

export async function createFirebaseAdminApp(params: FirebaseAdminAppParams) {
  const privateKey = formatPrivateKey(params.privateKey);

  if (admin.apps.length > 0) {
    return admin.app();
  }

  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey,
  });

  return admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    storageBucket: params.storageBucket,
  });
}

export async function initAdmin() {
  const params = {
    projectId: "vivoenergy-83246" as string,
    clientEmail:
      "firebase-adminsdk-f7ng0@vivoenergy-83246.iam.gserviceaccount.com" as string,
    storageBucket: "vivoenergy-83246.appspot.com" as string,
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCXthkIPMMRthfK\nOW8rSP0GkLVmtOznmIbW8AWz1NoaIwoGf9uj19ySPLgQxXsotpua181pRWo8+Pqm\nWiQdC4ACm67GOWktAECfa0zLq+KDViSipvkrrj1PxzLIyEMrisoGviqJAwGRHo1X\nFWseTqTQW+IoQ41XAU6Ecp/rFkG/mV1oCZTXfAwKcmCNrjQ8r8MiKo7VjEPEGdFD\nOE9OzUDfbmxzSw+rhSulzNREYdGz4mDiB7Bv4mxFtUHjgBe+FLwMC7S+MFpNZe6+\nMNILbNiDPTILcRXvsIMSkNe763zGbUOpkaoAnTncprHnQFZVvrXfsrVUOc6AAjcQ\n7z0PV0e9AgMBAAECggEAAV29mPePHCQ4eko3yDsr3XjFIWvPVwCRH54MDG6ww3Eo\nVcml99zpmr7a5iUZHaiTUHrRWeQq95SYZpIY5tK5MDd9r0Gfba0lvSnGsxjU/TDJ\nO1ZnQlpF1BJA+1I5BKCHKYth2lesFnCg04rDqwNd9EBiPNGVlBXUwq2TkhbiYwV3\nemT6uGodppTVVInuQLqeuIs9yXR32Is+MN41OVrV75O8NxfxkWLj4u6bBVkvGGXD\nG6oCZ12df5ygBSpPa7aC0hJNi7jprVpT2hmm4t06tHMOBL8r7P8/Sne/dxI29VGU\nHjZqU57dSQUUWnoMJ2ZT3ZwkE5Yr7o/jUIn2r+skkQKBgQDTsjViCC8rtKamE64F\nINWZFjwBp1YgPffUEUDaJtuPQ3yM+C+oSM9zoOjNsWe9R5j0Xeo1TwoL03qNM2fd\n9/zKQQHYh1ssjTev6pGOGsxo0bFv7EjMbrqCWpp85ZU1KcTHmQv44GA5HqYPvVLV\nk63xnwTFen0p8OD/G670BzmYJQKBgQC3dieUBYViKlpVm1xOogQwoHGyi29WxsyT\n9NkgLlpAk3v53vN/rbLs8c7dBiC10xTKPl7zoKf/U5gzFHFUS97jcVaD7gx02NTe\n/ljtZQufCsqGa0ZcFTy6WooDJgBhHjJO5dpn3+JidtmBBx/Dp5z6W20UMGJo0EY3\nH0dqs1BxuQKBgQC2aU2UbkbvGxep7TU62AMViVIlfqI44AynYEKId4kjFlzBP64Z\nDLws/076xs4EDCihEDeavcODUzO7bbsnSeM6B+/mOyP17K06WR4Y28Cc5WtGbMyB\n0zvEzPtneZArIhWcg6UMS5K+RUmEMHeq7zioBYTgAN7O/+9wAtOrFHqtPQKBgHRs\nKZ+YhVWPVPYgekp4LDqDhsNsEsK5s5ds+OCgKavzK+icYF+05efRZ5oBSn64LehN\n/kmSuSmhbeN0ZJq+7vncsa9VQFhiRWwhcmNsDRznZzA4IVVMMNZ9oDlxQypeVESX\nPqtOe0ZK76oe0DyEQGzr2ePG9JxZF0XhtptyoWkZAoGBAIkRjs46x6hOkJdxfcCF\n7pvdOxdPcdWlhJOWbI3bIfLryCeSHzIxh781k1/O/r+1nYPNmKfsKF7KwixxM5uU\njSqIH37NbyjC6jxi8WzxxaIqK1p8hGlVUrOFMrzUBD8+8h/W0OIampxYbtSccWfN\n0FKirGR9kP5ghtZ+ZHUeDDzL\n-----END PRIVATE KEY-----\n" as string,
  };

  return createFirebaseAdminApp(params);
}
