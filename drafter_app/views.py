from rest_framework.views import APIView
from rest_framework.response import Response

# Global shared state
draft_store = {
    "message": "",
    "draftId": "",
    "summary": "",
    "mail": ""
}

class HandleDraft(APIView):
    def post(self, request):

        draft_store["message"] = request.data.get("message", "")
        draft_store["draftId"] = request.data.get("draftId", "")
        draft_store["summary"] = request.data.get("summary", "")
        draft_store["mail"] = request.data.get("mail", "")
        print(draft_store["draftId"])
        return Response({"message": "ok"})

    def get(self, request):
        if all(draft_store.values()):
            return Response(draft_store)
        return Response({"message": "wait"})
