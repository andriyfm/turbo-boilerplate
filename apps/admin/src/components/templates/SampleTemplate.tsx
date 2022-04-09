import * as Layout from 'layouts'
import React from 'react'
import Button from 'ui/Button'

const SampleTemplate: React.FC = () => (
  <Layout.AppLayout title="Sample Template">
    <div className="prose prose-h1:capitalize">
      <h1>heading</h1>
      <p>
        Magna ex adipisicing sint dolore magna qui magna nisi nisi eiusmod in
        commodo ex. Culpa officia ad adipisicing non do. Enim aute nisi dolore
        est id esse tempor reprehenderit enim eiusmod minim eiusmod sint.
      </p>
      <p>
        Exercitation enim elit fugiat aute occaecat duis cupidatat ad irure
        pariatur eiusmod ad est esse. Excepteur enim eu dolore sit elit laborum
        eiusmod minim duis labore cillum. Magna minim do cillum consectetur
        nostrud est commodo. Enim cupidatat deserunt minim consectetur deserunt
        est veniam ut sit est. Eu ea do labore consectetur irure.
      </p>
      <p>
        Lorem Lorem anim ut et irure eiusmod nisi deserunt in. Aliquip nostrud
        ex nisi proident excepteur enim aute eu id esse. Velit mollit aliquip
        mollit occaecat aliquip ad. Deserunt sunt labore tempor occaecat esse
        aute voluptate.
      </p>

      <p>
        Est est Lorem sit aliquip quis consectetur ullamco ut cupidatat aliqua
        sit excepteur occaecat. Irure proident aliquip laborum nulla veniam ex
        ex cillum excepteur est ex commodo quis. Consectetur eiusmod dolore
        reprehenderit pariatur laborum dolore reprehenderit. Dolore ex
        consectetur deserunt incididunt ex non do do eiusmod. Et dolore elit
        ullamco elit mollit.
      </p>
      <Button text="button" />
    </div>
  </Layout.AppLayout>
)

export default SampleTemplate
